import type { CLICommand, State } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import * as maps from "./command_maps.js";
import { commandEncounter } from "./command_encounter.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "list all available commands",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Get the next page of locations",
      callback: maps.commandMap,
    },
    mapb:{
      name: "mapb",
      description: "Get the previous page of locations",
      callback: maps.commandMapMove,
    },
    explore: {
      name: "explore <name/id>",
      description:"get all pokemon in a location",
      callback: commandEncounter,
    }
  };
}
