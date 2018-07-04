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
let port = 4200;

process.argv.forEach(function (val, index, array) {
    if (val.startsWith('--api_url')) {
        apiUrl = val.substring(val.indexOf('=') + 1);
        console.log(apiUrl);
    }
    if (val.startsWith('--port')) {
        port = Number.parseInt(val.substring(val.indexOf('=') + 1));
    }
    if (val.startsWith('--prefix')) {
        prefix = val.substring(val.indexOf('=') + 1);
    }
});

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

app.post('/api/submitRecatpcha', function (req, res) {
    console.log(req.body['g-recaptcha-response']);
    // g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({'responseCode': 1, 'responseDesc': 'Please select captcha'});
    }
    // Put your secret key here.
    const secretKey = '6LfdAWIUAAAAAN8pJtNjShY2H_XrEePsHe-Ci37c';
    // req.connection.remoteAddress will provide IP address of connected user.
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secretKey + '&response=' + req.body['g-recaptcha-response'] + '&remoteip=' + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        console.log('er');
        console.log(error);
        console.log('body');
        console.log(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            return res.json({'responseCode': 1, 'responseDesc': 'Failed captcha verification'});
        }
        res.json({'responseCode': 0, 'responseDesc': 'Sucess'});
    });
});


app.use('/api', proxy(apiUrl, {
    proxyReqPathResolver: function (req) {
        return prefix + require('url').parse(req.url).path;
    },
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
        proxyReqOpts.headers['FTEC-REMOTE-USER'] = srcReq.connection.remoteAddress;
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
