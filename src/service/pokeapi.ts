type Area = {
    name: string;
    url?: string;
}

type ApiResponse = {
    results: Area[];
}

// export const getAreas = async (): Promise<string[]> => {
//     try{
//         const response = await fetch (
//             "https://pokeapi.co/api/v2/location-area",
//             {
//                 method: "GET",
//             }
//         );

//         if(!response.ok){
//             throw new Error(`Failed to fetch areas:`);
//         }

//         const data: ApiResponse = await response.json();
//         const areas = data.results?.map((area)=> area.name) || [];   
//         return areas;
//     }
//     catch(err)
//     {
//         console.error(err);
//         return [];
//     }
// }

export type ShallowLocation = {
        name: string;
        url?: string;
    }

export type Location  = {}

export class PokeAPI {
    private static BASE_URL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations (pageURL?:string): Promise<ShallowLocation[]> {}

    async fetchsingleLocation (locationName:string): Promise<Location> {}
}
