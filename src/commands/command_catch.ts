import { State } from "../state.js";

export async function commandcatch(state: State, pokemonName: string): Promise<void> {
    process.stdout.write('\n');
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const data = await state.pokeapi.fetchPokemonXP(pokemonName);
    const pokemonXP = data.base_experience;
    const difficulty = Math.min(0.25 * pokemonXP / 100, 0.99);
    let tries = 0;

    if (tries>10) {
        console.log("You've tried too many times. The Pokémon escaped!");
        return;
    }

    try{
        const catchChance = Math.random();
        if(catchChance > difficulty){
            console.log(`${pokemonName} was caught!`);
            state.caughtPokemon[pokemonName] = { name: pokemonName};
        }
        else{
            console.log(`${pokemonName} escaped!`);
            tries++;
        }
    } catch (error) {
        console.error("oh no the pokeball broke! ", error);
    }
}