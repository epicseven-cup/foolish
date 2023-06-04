import { FoolishRespond } from "../util/Respond.ts"
interface FoolishHandler {
    handler(socket:Deno.Listener):FoolishRespond
}