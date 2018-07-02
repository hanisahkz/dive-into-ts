import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/crmRoutes"; //naming of class will be autodetected

class App {

    public app: express.Application;
    //todo: to understand the convention in declaring variable
    public router: Routes = new Routes();

    //every variable is initialized
    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;