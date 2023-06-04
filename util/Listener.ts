import {FoolishHandler} from "../server/FoolishHandler.ts"

class FoolishListener {
    _socket: Deno.Listener = null
    _port: string = null
    _handler: FoolishHandler = null
    _alive: boolean = false
    constructor(port="4000", handler:FoolishHandler=null) {
        this._port = port
        this._socket = Deno.listen({port: port, transport: "tcp"})
        this._handler = handler
        this._alive = true
    }
    Accept(): <> {
        const request:Deno.Conn = this._socket.accept()
        return this._handler.handler(request),
    }

    Write(): boolean {
        this._socket.
    }
}