class FoolishListener {
    _socket = null
    _port = "4000"
    _handler = (request:FoolishRequest) => {return;}
    constructor(port, handler){
        this._port = port
        this._socket = Deno.listen({ port: port, transport: "tcp"})
        this._handler = handler
    }

    Accpect(): FoolishRespond{

    }
}