export interface ResponseApi {
    pokemon: Pokemon[]
}

export interface Pokemon {
    id: number;
    name: string;
    img: string;
    num: string;
    type: string[];
    height: string;
    weight: string;
    candy: string;
    candy_count: number;
    egg: string;
    spawn_chance: number;
    avg_spawns: number;
    spawn_time: string;
    multipliers: number[];
    weaknesses: string[];
    next_evolution: Pokemon[];
}