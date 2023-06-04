import { FoolishRouter } from "../util/Router.ts";
import { FoolishLogger } from "../util/Logger.ts";
import { FoolishListener } from "../util/Listener.ts";
import { FoolishRespond } from "../util/Respond.ts"
class Foolish {
    _ListenerAddress: string;
    // these are for side stuff htat need to be implaneted
    _Router: FoolishRouter;
    _Logger: FoolishLogger;
    _Listener: FoolishListener;
    _Status:boolean;
    constructor(port: string, address: string = "localhost") {
        // Setting up the foolish basic porprty
        this._ListenerAddress = port + address
    }

    start(){
        // Starts the tcp socket listending
        // logs that the server has started
        while(this._status){
            respond: FoolishRespond = this._Listener.Accept();
            this._Listener.
        }
        
    }

    addRoute(){
        // add route to router
        // dynmatic routing need to be careful on syntax
    }
}