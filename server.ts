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
const http = require('http');

let apiUrl = '';
let port = 4200;

process.argv.forEach(function (val, index, array) {
    if (val.startsWith('--api_url=')) {
        apiUrl = val.substring(val.indexOf('=') + 1);
        console.log(apiUrl);
    }
    if (val.startsWith('--port')) {
        port = Number.parseInt(val.substring(val.indexOf('=') + 1));
    }
});

const PORT = process.env.PORT || port;
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



app.use('/api', function (req, res) {
    console.log(req.path);
    console.log(req.query);
    res.setHeader('content-type', 'application/json');
    let query = '';
    if (Object.keys(req.query).length > 0) {
        query += '?';
    }
    for (const param of Object.keys(req.query)) {
        query += param + '=' + req.query[param];
    }

    const options = {
        protocol: 'http:',
        host: apiUrl,
        port: 80,
        path: req.path + query,
        method: req.method,
        headers: req.headers,
    };

    console.log(options);
    const creq = http.request(options, function (cres) {
        // set encoding

        cres.on('data', function (chunk) {
            console.log('data came');
            console.log(cres.statusCode);
            res.status(cres.statusCode).write(chunk);
        });

        cres.on('close', function () {
            // closed, let's end client request as well
            console.log('closed request');
            res.end();
        });

        cres.on('end', function () {
            console.log('end');
            // console.log(cres);
            if (!res.headersSent) {
                res.writeHead(cres.statusCode);
            }
            // finished, let's finish client request as well?
            res.end();
        });

    }).on('error', function (e) {
        console.log(e);
        res.status(500).end(http.STATUS_CODES[500]);
    });
    if (req.method.toLowerCase() === 'put' || req.method.toLowerCase()  === 'post' || req.method.toLowerCase()  === 'patch') {
        creq.write(JSON.stringify(req.body));
    }
    creq.end();

});

app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
}));

app.get('*', (req, res) => {
    res.render('index', {req});
});


if (apiUrl) {
    app.listen(PORT, () => {
        console.log(`Node Express server listening on http://localhost:${PORT}`);
    });
}
