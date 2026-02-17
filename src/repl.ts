import { rl } from "./interface.js";

export function cleanInput(input:string):string[]{
    return input.trim().toLowerCase().split(/\s{1,}/);
}


export function startREPL(){
    rl.prompt();

    rl.on("line", (input:string) => {
    if(input.length === 0)
    {
        rl.prompt();
        return;
    }

    const wordarr = cleanInput(input);

    console.log(`Your command was: ${wordarr[0]}`);
    rl.prompt();

    });
}