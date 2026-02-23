import { State } from "../state.js";


export async function commandEncounter(state:State, locationname:string): Promise<void>{
    console.log(`Exploring ${locationname}...`);
    try{
        const encounterpokemon = await state.pokeapi.ExploreLocations(locationname);
        console.log(`Found Pokemon: \n - ${encounterpokemon.map((p: any) => p.name).join('\n - ')} \n`);
    }
    catch(err)
    {
        console.error("An error occurred while exploring the location:", err);
    }
}