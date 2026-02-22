import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./service/pokeapi.js";
import { Cache } from "./pokecache.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args:string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  pokeapi: PokeAPI;
  commands: Record<string, CLICommand>;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
};

export function initState() : State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  return {
    readline: rl,
    pokeapi: new PokeAPI(new Cache(200000)),
    commands: getCommands(),
    nextLocationsURL: null,
    prevLocationsURL: null,
  };
}
