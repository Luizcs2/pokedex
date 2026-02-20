export type ShallowLocation = {
        name: string;
        url?: string;
    }

export type ShallowLocationResponse = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: ShallowLocation [];
}

export type Location  = {
    name: string;
}

export type LocationResponse = {
    id: number;
    name: string;
    names: Location[];
}

export class PokeAPI {
    public static BASE_URL = "https://pokeapi.co/api/v2";
    nextLocationsURL: string | null = null;
    prevLocationsURL: string | null = null;

    constructor() {}

    async fetchLocations (pageURL?: string): Promise<ShallowLocation[]> {
        const url = pageURL ?? `${PokeAPI.BASE_URL}/location-area`;
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
            return data.results.map((shallowLocation) => ({
                name: shallowLocation.name,
            }));
        }
        catch(err)
        {
            console.error(err);
            return [];
        }
    }

    async fetchsingleLocation (locationName:string): Promise<Location> {
        const url = `${PokeAPI.BASE_URL}/location/${locationName}`;

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
}
