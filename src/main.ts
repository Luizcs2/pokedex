import { get } from "node:http";
import {startREPL} from "./repl.js";
import { initState } from "./state.js";
import { getAreas } from "./service/pokeapi.js";

function main():void{
    // startREPL(initState());
    console.log(getAreas());
}

main();