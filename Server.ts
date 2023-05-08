import { FoolishRouter } from "./util/Router.ts";
import { FoolishLogger } from "./util/Logger.ts";
import { FoolishListener } from "./util/Listener.ts";
class Foolish {
    _listenerAddress: string;
    // these are for side stuff htat need to be implaneted
    _Router: FoolishRouter;
    _Logger: FoolishLogger;
    _Listener: FoolishListener;
    constructor(port: string, address: string = "localhost") {
        // Setting up the foolish basic porprty
        this._listenerAddress = port + address
        
    }

    start(){
        // Starts the tcp socket listending
        // logs that the server has started
    }

    addRoute(){
        // add route to router
        // dynmatic routing need to be careful on syntax
    }

}