
import App from "./App";
import {config} from "./utils/constants";
import logger from "./utils/logger";


const boostrap = () => {
    const gatewayApp = new App();
    const port = config.PORT;
    const host = config.HOST; 
    gatewayApp.serve(port, host, () => {
        logger.info(`Gateway App started on http://${host}:${port}`)
    });
}

boostrap();