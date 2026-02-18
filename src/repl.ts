import { rl } from "./interface.js";
import { getCommands } from "./commands.js";

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

    for (const command in getCommands()){
        if (command === input){
            getCommands()[command].callback(getCommands());
            rl.setPrompt("\n >");
            return;
        }
    }

    const wordarr = cleanInput(input);


    });
}