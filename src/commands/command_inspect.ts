import { PokeAPI } from "../service/pokeapi.js";


export async function commandInspect(state: any, pokemonName: string): Promise<void> {
    process.stdout.write('\n');
    console.log(`Inspecting ${pokemonName}...`);

    if(!state.pokeapi.cache.get(`${PokeAPI.BASE_URL}/pokemon/${pokemonName}`)){
        console.log("This Pokemon has not been caught yet.");
        return;
    }

    const data = state.pokeapi.cache.get(`${PokeAPI.BASE_URL}/pokemon/${pokemonName}`);

    if(state.caughtPokemon[data.name]){
        console.log(`Name: ${data.name}`);
        console.log(`Base Experience: ${data.base_experience}`);
        console.log(`Height: ${data.height}`);
        console.log(`Weight: ${data.weight}`);
        console.log(`Species: ${data.species.name}`);
        console.log("Stats:");
        console.log(data.stats.map((s: any) => ` - ${s.stat.name}: ${s.base_stat}`).join('\n'));
        console.log("Types:");
        console.log(`${data.types.map((t: any) => t.type.name).join(', ')}`);
        console.log("Abilities:");
        console.log(data.abilities.map((a: any) => ` - ${a.ability.name}`).join('\n'));
        console.log("Moves:");
        console.log(data.moves.map((m: any) => ` - ${m.move.name}`).join('\n'));
        console.log(`Can be found in: ${data.location_area_encounters}`);
    }
    else{
        console.log("This Pokemon has not been caught yet.");
    }
}