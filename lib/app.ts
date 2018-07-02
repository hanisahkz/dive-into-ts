import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/crmRoutes"; //naming of class will be autodetected
import * as mongoose from "mongoose";

class App {

    //public + varName: type = <insert relevant value>;
    public app: express.Application;
    public router: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/CRMdb';

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
        //this.<method call defined here>
        this.mongoSetup();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;