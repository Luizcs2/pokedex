import { CLICommand } from "./interface";



export function getCommands():Record<string, CLICommand>{
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit
        },
    };
};

export function commandExit(){
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
};

export function commandandHelp(){
    console.log("Available commands:");
    const commands = getCommands();
    for (const command in commands){
        console.log(`${commands[command].name}: ${commands[command].description}`);
    }
}