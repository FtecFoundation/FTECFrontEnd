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

const PORT = process.env.PORT || 80;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main.bundle');

// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
let apiUrl = '';
let prefix = '';
let prod = false;
let port = 4200;
let secretCaptcha = '';

process.argv.forEach(function (val, index, array) {
    if(val.startsWith('--prod_enabled')) {
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

app.get('/api/properties/getPreferences', function (req, res) {
    res.json({botDomain: botDomain, etherscanPrefix: etherscanPrefix, contractAddress: contractAddress});
});


app.post('/api/submitRecatpcha', function (req, res) {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' ||
        req.body['g-recaptcha-response'] === null) {
        return res.json({'responseCode': 1, 'responseDesc': 'Please select captcha'});
    }
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secretCaptcha + '&response=' +
        + req.body['g-recaptcha-response'] + '&remoteip=' + req.connection.remoteAddress;
    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);

        if (body.success !== undefined && !body.success) {
            return res.json({'responseCode': 1, 'responseDesc': 'Failed captcha verification'});
        }
        res.json({'responseCode': 0, 'responseDesc': 'Sucess'});
    });
});

app.use('/api/cabinet/image', proxy(apiUrl, {
    proxyReqPathResolver: function (req) {
        return prefix + '/cabinet/image';
    },
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
        console.log('------------------------------------------------------------------------------------------');
        console.log(srcReq.body);
        proxyReqOpts.headers['user-forward'] = srcReq.connection.remoteAddress;
        return proxyReqOpts;
    },
    parseReqBody: false
}));


app.use('/api', proxy(apiUrl, {
    proxyReqPathResolver: function (req) {
        return prefix + require('url').parse(req.url).path;
    },
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
        proxyReqOpts.headers['user-forward'] = srcReq.connection.remoteAddress;
        return proxyReqOpts;
    }
}));
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
}));

app.get('*', (req, res) => {
    res.render('index', {req});
});

if (apiUrl) {
    app.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}