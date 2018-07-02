"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes"); //naming of class will be autodetected
const mongoose = require("mongoose");
class App {
    constructor() {
        this.router = new crmRoutes_1.Routes();
        this.mongoUrl = 'mongodb://localhost/CRMdb';
        this.app = express();
        this.config();
        this.router.routes(this.app);
        //this.<method call defined here>
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map