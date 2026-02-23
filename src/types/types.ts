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

type PokemonEncounter = {
    pokemon:{
        name: string;
        url?: string;
    }

}

export type PokemonEncounterSummary = {
    name: string;
}

export type PokemonInAreaResponse = {
    id: number;
    name: string;
    pokemon_encounters: PokemonEncounter[];
}


export type PokemonDetailsResponse = {
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Ability[]
//   forms: Form[]
//   held_items: HeldItem[]
    location_area_encounters: string
    moves: Mfe[]
    species: Species
    stats: Stat[]
}

export interface Species {
  name: string
}

export interface Mfe {
  move: Move
}

export interface Move {
  name: string
  url: string
}

export type Pokemon = {
  name: string;
}

export interface Stat {
  base_stat: number
  effort: number

}

export interface Ability {
  is_hidden: boolean
  slot: number
  ability: Ability2
}

export interface Ability2 {
  name: string
  url: string
}