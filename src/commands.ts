import type { CLICommand, State } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import * as maps from "./command_maps.js";  

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Displays the the areas in pokemon world",
      callback: maps.commandMap,
    },
    mapb:{
      name: "mapb",
      description: "Displays the the areas in pokemon world, but backwards",
      callback: maps.commandMapMove,
    }
  };
}
