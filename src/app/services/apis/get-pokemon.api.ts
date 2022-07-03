/* services */
import { pokemonApiService } from './pokemon.api';
/* handlers */
import { httpResponseHandler } from 'shared/handlers';

export const getPokemonApiService = async (name: string) => {
    const response = await pokemonApiService(`pokemon/${name}`);

    if (!response) return httpResponseHandler(undefined, true, 'NO_POKEMON');

    return httpResponseHandler(response, false, '');
};
