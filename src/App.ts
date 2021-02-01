import express, { Application }  from "express";
import path from "path";
import dotenv from "dotenv";
import  logger from "./utils/logger";


if (process.env.NODE_ENV) {
    dotenv.config({
        path: path.join(process.cwd() + `/enviroment/${process.env.NODE_ENV}.env`)
    });
    logger.info(`enviroment is: ${process.env.NODE_ENV}`);
} else {
    logger.error("Node environment not set.");
    process.exit(1);
}


class App {
    app: Application;     
    
    constructor(){
        this.app = express();
        // this.app.use("*", rateLimit({
        //     windowMs: 15 * 60 * 1000,
        //     max: 200
        // }));
    }
    serve(port:number, host:string, cb:() => void ):void{
        this.app.listen(port, host, cb);
    }
}

export default App;
