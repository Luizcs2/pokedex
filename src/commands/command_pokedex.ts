import { State } from "../state.js";
export async function commandPokedex(state:State): Promise<void> {
    try
    {
        const pokemonList = Object.values(state.caughtPokemon);
        if(pokemonList.length === 0) {
            console.log("Your Pokedex is empty! Catch some Pokemon to see them here.");
        }
        else{
            console.log("Your Pokedex:");
            for(const pokemon of pokemonList) {
                console.log(`- ${pokemon.name}`);
            }
        }
    }
    catch (error)
    {
        console.error("An error occurred while fetching the Pokedex:", error);
    };
}