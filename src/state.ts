import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./service/pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  readline: Interface;
  pokeapi: PokeAPI
  commands: Record<string, CLICommand>;
};

export function initState() : State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  return {
    readline: rl,
    commands: getCommands(),
  };
}
