import { get } from "node:http";
import {startREPL} from "./repl.js";
import { initState } from "./state.js";


function main():void{
    startREPL(initState());
}

main();