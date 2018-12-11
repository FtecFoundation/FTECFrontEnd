import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';

import * as express from 'express';
import {join} from 'path';
import {readFileSync} from 'fs';

const domino = require('domino');
const win = domino.createWindow('index.html');

global['window'] = win;
global['document'] = win.document;
global['navigator'] = win.navigator;
global['CSS'] = undefined;

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
const proxy = require('express-http-proxy');
const request = require('request');
const fileSystem = require('fs');
const rateLimit = require("express-rate-limit");
let bannedIPs = [];
const jsonfile = require('jsonfile');
const faqFile = '/faq/faq.json';
const cors = require('cors');

app.enable("trust proxy");

const limiter = rateLimit({
    windowMs: 1000,
    max: 15,
    handler: function (req, res) {
        if (bannedIPs.indexOf(req.connection.remoteAddress) === -1) bannedIPs.push(req.connection.remoteAddress);
    }
});

app.use("/api/", limiter);

const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main.bundle');

import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import * as fs from 'fs';
import * as https from 'https';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
let apiUrl = '';
let prefix = '';
let prod = false;
let port = 4200;
let secretCaptcha = '';
let serverProxy = '';

process.argv.forEach(function (val, index, array) {
    if (val.startsWith('--prod_enabled')) {
        // `!!` casts string to boolean
        prod = !!val.substring(val.indexOf('=') + 1);
    }
    if (val.startsWith('--api_url')) {
        apiUrl = val.substring(val.indexOf('=') + 1);
    }
    if (val.startsWith('--port')) {
        port = Number.parseInt(val.substring(val.indexOf('=') + 1));
    }
    if (val.startsWith('--prefix')) {
        prefix = val.substring(val.indexOf('=') + 1);
    }
    if (val.startsWith('--secret_captcha')) {
        secretCaptcha = val.substring(val.indexOf('=') + 1);
    }
    if (val.startsWith('--proxy')) {
        serverProxy = val.substring(val.indexOf('=') + 1);
    }
});
const botDomain = prod ? 'FTEC_Telegram_bot' : 'FTEC_test_bot';
const etherscanPrefix = prod ? 'api.' : 'api-ropsten.';
const contractAddress = prod ? '0x6bec54e4fea5d541fb14de96993b8e11d81159b2' : '0xaC1eC31A5d24d2ac84404E19734Dd34A288450f3';

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api', (req, res, next) => {
    if (bannedIPs.indexOf(req.connection.remoteAddress) !== -1) {
        res.status(429);
        res.json({status: 429, error: 'Too many requests'});
    }
    next();
});

app.get('/api/faq', function (req, res) {
    if (!fileSystem.existsSync(faqFile)) {
        fileSystem.appendFile(faqFile, '[]', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    jsonfile.readFile(faqFile, function (err, obj) {
        if (err) return res.status(500).send({ error: err });
        return res.json(obj);
    })
});

app.post('/api/faq', function (req, res) {
    if (!fileSystem.existsSync(faqFile)) {
        fileSystem.openSync(faqFile, 'w');
    }
    jsonfile.writeFile(faqFile, req.body, function (err) {
        if (err) return res.status(500).send({ error: err});
        return res.json({status: 0, response: {added: true}});
    })
});

app.use('/hitbtc', proxy('https://api.hitbtc.com', {
    proxyReqPathResolver: function (req) {
        return '/api/2/public' + require('url').parse(req.url).path;
    }
}));

app.get('/bittrex/market/GetTicks', function (req, res) {
    const path = require('url').parse(req.url).path;
    const url = 'https://bittrex.com/Api/v2.0/pub/market/GetTicks' + path.substring(path.indexOf('?'));
    request(url, function (error, response, body) {
        res.send(body);
    });
});

app.get('/binance/klines', function (req, res) {
    const path = require('url').parse(req.url).path;
    const url = 'https://www.binance.com/api/v1/klines' + path.substring(path.indexOf('?'));
    request(url, function (error, response, body) {
        res.send(body);
    });
});



// app.use('/bittrex', proxy('http://' + serverProxy, {
//     proxyReqPathResolver: function (req) {
//         return '/bittrex/api/v1.1/public' + require('url').parse(req.url).path;
//     }
// }));

// app.use('/binance', proxy('http://api.binance.com', {
//     proxyReqPathResolver: function (req) {
//         return '/api/v3' + require('url').parse(req.url).path;
//     }
// }));

app.get('/api/properties/getPreferences', function (req, res) {
    res.json({botDomain: botDomain, etherscanPrefix: etherscanPrefix, contractAddress: contractAddress});
});


app.post('/api/submitRecatpcha', function (req, res) {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' ||
        req.body['g-recaptcha-response'] === null) {
        return res.json({'responseCode': 1, 'responseDesc': 'Please select captcha'});
    }
    const usersResponse = req.body['g-recaptcha-response'];
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secretCaptcha + '&response=' + usersResponse + '&remoteip=' + req.connection.remoteAddress;

    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);

        if (!body.success) {
            return res.json(body);
        }
        res.json({'responseCode': 0, 'responseDesc': 'success'});
    });
});

app.get('/binance/ticker/allPrices', function (req, res) {
    const url = 'https://www.binance.com/api/v1/ticker/allPrices';
    request(url, function (error, response, body) {
        res.send(body);
    });
});

app.get('/binance/ticker/price', function (req, res) {
    const url = 'https://www.binance.com/api/v1/ticker/price';
    const param = req.query.symbol;
    request(url + '?symbol=' + param, function (error, response, body) {
        res.send(body);
    });
});

app.use('/api/cabinet/image', proxy(apiUrl, {
    proxyReqPathResolver: function (req) {
        return prefix + '/cabinet/image';
    },
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
        proxyReqOpts.headers['user-forward'] = (srcReq.headers && srcReq.headers['x-forwarded-for'])
            || srcReq.ip
            || srcReq._remoteAddress
            || (srcReq.connection && srcReq.connection.remoteAddress);
        return proxyReqOpts
    },
    parseReqBody: false

}));


app.use('/api', proxy(apiUrl, {
    proxyReqPathResolver: function (req) {
        return prefix + require('url').parse(req.url).path;
    },
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {

        proxyReqOpts.headers['user-forward'] = (srcReq.headers && srcReq.headers['x-forwarded-for'])
            || srcReq.ip
            || srcReq._remoteAddress
            || (srcReq.connection && srcReq.connection.remoteAddress);
        return proxyReqOpts
    }
}));

app.get('', (req, res) => {
    res.sendFile(join(DIST_FOLDER, 'browser/landing.html'));
});

app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
}));

app.get('*', (req, res) => {
    res.render('index', {req});
});


if (apiUrl) {
    if (prod) {
        var privateKey = fs.readFileSync('/SSL/pk.pem');
        var certificate = fs.readFileSync('/SSL/cert.pem');
        https.createServer({
            key: privateKey,
            cert: certificate
        }, app).listen(port, () => {
            console.log(`Node Express server listening on http://localhost:${port}`);
        });
        const appBittrex = express();
        appBittrex.use(cors());
        appBittrex.options('*', cors());
        appBittrex.use('/bittrex', function (req, res) {
            const url = 'http://' + serverProxy + '/bittrex/api/v1.1/public/' + req.originalUrl.substr(9);
            request(url, function (error, response, body) {
                res.send(body);
            });
        });
        appBittrex.listen(80);
    }
    if (!prod) {
        app.listen(port, () => {
            console.log(`No prod: Node Express server listening on http://localhost:${port}`);
        });
    }
}
