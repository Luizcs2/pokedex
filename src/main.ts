import { get } from "node:http";
import {startREPL} from "./repl.js";
import { initState } from "./state.js";


async function main(): Promise<void> {
    try {
        await startREPL(initState());
    } catch (err) {
        console.error("An error occurred while starting the Pokedex:", err);
    }
}

main();