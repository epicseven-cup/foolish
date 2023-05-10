class ParserMetaData implaneted metaData {
    this.sender: string = null
    this.destation: string = null
    this.data = []
    constructor(respond:FoolishRespond){
        this.sender = respond.sender
        this.destation = respond.destation
        this.data = respond.data
    }

    getinfo(): Map<string, Any> {
        const outputMap:Map<string, Any> = new Map("sender": this.sender, "destation": this.destation, "data": this.data)
        return outputMap
    }
}