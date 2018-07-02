"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes"); //naming of class will be autodetected
class App {
    //every variable is initialized
    constructor() {
        //todo: to understand the convention in declaring variable
        this.router = new crmRoutes_1.Routes();
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map