export interface PokemonMove {
    name: string;
    versionsCount: number;
}

export interface Pokemon {
    id: number;
    name: string;
    sprites: string[];
    moves: PokemonMove[];
}
