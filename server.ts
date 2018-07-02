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

app.use('/api', proxy(apiUrl, {
    proxyReqPathResolver: function(req) {
        return prefix + require('url').parse(req.url).path;
    }
}));

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
