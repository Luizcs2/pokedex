import { Cache } from "../pokecache.js";
import { Location, LocationResponse, PokemonEncounterSummary, PokemonInAreaResponse, ShallowLocation, ShallowLocationResponse, PokemonDetailsResponse } from "../types/types.js";

export class PokeAPI {
    public static BASE_URL = "https://pokeapi.co/api/v2";
    nextLocationsURL: string | null = null;
    prevLocationsURL: string | null = null;

    constructor(private cache: Cache) {}

    async fetchLocations (pageURL?: string): Promise<ShallowLocation[]> {
        const url = pageURL ?? `${PokeAPI.BASE_URL}/location-area`;

        if (!this.cache.get(url)) {
            try {
                const response = await fetch (url, {
                    method: "GET",
                })
                if(!response.ok){
                    throw new Error(`Failed to fetch locations: ${response.statusText}`);
                }

                const data: ShallowLocationResponse = await response.json();
                this.nextLocationsURL = data.next ?? null;
                this.prevLocationsURL = data.previous ?? null;

                this.cache.add(url,data);



                return data.results.map((shallowLocation: ShallowLocation) => ({
                    name: shallowLocation.name,
                }));
            }
            catch(err)
            {
                console.error(err);
                return [];
            }
        }

        const cachedData = this.cache.get(url) as ShallowLocationResponse;

        this.nextLocationsURL = cachedData.next ?? null;
        this.prevLocationsURL = cachedData.previous ?? null;

        return cachedData.results.map((shallowLocation: ShallowLocation) => ({
            name: shallowLocation.name,
        }));
    }

    async fetchsingleLocation (locationName:string): Promise<Location> {
        const url = `${PokeAPI.BASE_URL}/location/${locationName}`;

        if(!this.cache.get(url)){
            try {
                const response = await fetch(url,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                )
                if(!response.ok){
                    throw new Error(`Failed to fetch location: ${response.statusText}`);
                }
                const data: LocationResponse = await response.json();
                this.cache.add(url,data);
                return {
                    name: data.names[0].name,
                };

            }
            catch(err)
            {
                console.error(err);
                return {name: "Api Error"};
            }
        }
        const cachedData = this.cache.get(url) as LocationResponse;
        return {
            name: cachedData.names[0].name,
        };

    }

    async ExploreLocations(locationName:string): Promise<PokemonEncounterSummary[]>{
        const url = `${PokeAPI.BASE_URL}/location-area/${locationName}`;

        if(!this.cache.get(url)){
            try{
                const response = await fetch (url,{
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                    },
                })

                if(!response.ok){
                    throw new Error("failed to fetch pokemon in area ");
                };
                const data: PokemonInAreaResponse = await response.json();
                this.cache.add(url,data);

                return data.pokemon_encounters.map((encounter: any) => ({
                    name: encounter.pokemon.name,
                }));
            }
            catch(err)
            {
                console.log(err)
                return [];
            };
        };

        const cacheData = this.cache.get(url) as PokemonInAreaResponse;
        return cacheData.pokemon_encounters.map((encounter: any) => ({
            name: encounter.pokemon.name,
        }));
    };

    async PokemonDetails(pokemonName:string): Promise<PokemonDetailsResponse> {
        const url = `${PokeAPI.BASE_URL}/pokemon/${pokemonName}`;

        if(!this.cache.get(url)){
            try{
                const response = await fetch(url,{
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                    },
                })

                if(!response.ok){
                    throw new Error("failed to fetch pokemon details");
                }

                const data: PokemonDetailsResponse = await response.json();
                this.cache.add(url,data);
                return data;
            }
            catch(err)
            {
                console.log(err)
            };
        }

        const cachedata = this.cache.get(url) as PokemonDetailsResponse;
        return cachedata;
    };

    async fetchPokemonXP(pokemonName: string): Promise<PokemonDetailsResponse> {
        return this.PokemonDetails(pokemonName);
    }
}
