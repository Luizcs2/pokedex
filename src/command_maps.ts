import type { State } from "./state.js";
import { PokeAPI } from "./service/pokeapi.js";

export async function commandMap (state: State): Promise<void> {
    const url = state.pokeapi.nextLocationsURL ?? `${PokeAPI.BASE_URL}/location-area`;
    console.log("Fetching locations...");

    try{
        const location = await state.pokeapi.fetchLocations(url);
         for(const loc of location){
            console.log(loc);
        }
        if (!state.pokeapi.nextLocationsURL) {
            console.log("No more locations to display.");
            return;
        }
    }
    catch(error){
        console.error("An error occurred while fetching locations:", error);
    }
};

export async function commandMapMove (state:State): Promise<void>{
    console.log("Moving to the previous page of locations...");
    try{
        const prevURL = state.pokeapi.prevLocationsURL;
        if (!prevURL) {
            console.log("No more locations to display.");
            return;
        }
        const location = await state.pokeapi.fetchLocations(prevURL);
        for(const loc of location){
            console.log(loc);
        }
    }
    catch(err){
        console.error("An error occurred while fetching the previous page of locations:", err);
    }
};