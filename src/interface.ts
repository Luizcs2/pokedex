import readline from "readline"


export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "\nWelcome to the Pokedex! \n Usage: \n" + "\n" + "- help: list all available commands \n- exit: exit the Pokedex \n> ",
});

export type CLICommand = {
    name: string;
    description: string;
    callback: (command:Record<string, CLICommand>) => void;
}

