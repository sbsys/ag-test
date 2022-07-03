export const pokemonApiService = async (endpoint: string) => {
    try {
        return await fetch(
            `${process.env.REACT_APP_POKEMON_API}/${endpoint}`
        ).then(res => res.json());
    } catch (error) {
        return undefined;
    }
};
