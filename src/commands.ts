import type { CLICommand, State } from "./state.js";
import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";
import * as maps from "./commands/command_maps.js";
import { commandEncounter } from "./commands/command_encounter.js";
import { commandcatch } from "./commands/command_catch.js";
import { commandInspect } from "./commands/command_inspect.js";
import { commandPokedex } from "./commands/command_pokedex.js";

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
    },
    catch:
    {
      name: "catch <name/id>",
      description: "catches a pokemon in the current location",
      callback: commandcatch,
    },
    inspect:{
      name: "inspect <name/id>",
      description: "inspect a caught pokemon",
      callback: commandInspect,
    },
    pokedex:{
      name: "pokedex",
      description: "list all caught pokemon",
      callback: commandPokedex,
    }
  };
}
