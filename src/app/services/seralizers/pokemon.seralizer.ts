/* types */
import { Pokemon } from 'app/types';

interface Data {
    id: number;
    name: string;
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
    moves: {
        move: { name: string };
        version_group_details: {}[];
    }[];
}

export const pokemonSeralizerService = ({
    id,
    name,
    sprites,
    moves,
}: Data): Pokemon => ({
    id: id,
    name: name,
    sprites: (Object.keys(sprites) as Array<keyof typeof sprites>).reduce(
        (prev, current) => {
            const currentValue = sprites[current];

            if (typeof currentValue !== 'string') return prev;

            return [...prev, currentValue];
        },
        [] as string[]
    ),
    moves: [
        ...moves.map(move => ({
            name: move.move.name,
            versionsCount: move.version_group_details.length,
        })),
    ],
});
