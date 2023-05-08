import { CssInterface } from "../CssHandler/CssInterface.ts"

interface DomInterface {
    cssCollection: Map<string, CssInterface>
    appendNode(): void;
}