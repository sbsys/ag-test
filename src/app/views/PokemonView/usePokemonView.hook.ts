/* react */
import {
    ChangeEvent,
    createContext,
    DetailedHTMLProps,
    FormEvent,
    FormHTMLAttributes,
    useState,
} from 'react';
/* props */
import { IPokemonViewContext } from './PokemonView.props';
import { ButtonProps, FieldProps } from 'shared/components';
/* services */
import { getPokemonApiService, pokemonSeralizerService } from 'app/services';
/* types */
import { Pokemon } from 'app/types';

/* context */
export const PokemonViewContext = createContext<IPokemonViewContext>({
    pokemon: {} as Pokemon,
    searchProps: {},
    searchSubmitProps: {},
    searchFormProps: {},
});

/* custom hook */
export const usePokemonView = () => {
    /* states */

    const [search, setSearch] = useState<string>('');

    const [isSearching, setIsSearching] = useState<boolean>(false);

    const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

    /* functions */

    const handleSetSearch = () => (event: ChangeEvent<HTMLInputElement>) =>
        setSearch(event.target.value);

    const handleSearchSubmit =
        () => async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            setPokemon({} as Pokemon);

            if (search.length === 0) return alert('No pokemon name!');

            setIsSearching(true);

            const response = await getPokemonApiService(search);

            setIsSearching(false);

            if (response.error) return alert(response.message);

            setPokemon(pokemonSeralizerService(response.data));
        };

    /* reactivity */

    /* props */

    const searchProps: FieldProps = {
        strategy: 'text',
        value: search,
        onChange: handleSetSearch(),
    };

    const searchSubmitProps: ButtonProps = {
        type: 'submit',
        disabled: isSearching,
    };

    const searchFormProps: DetailedHTMLProps<
        FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    > = {
        onSubmit: handleSearchSubmit(),
    };

    /* context */

    const context: IPokemonViewContext = {
        /* states */
        pokemon,
        /* props */
        searchProps,
        searchSubmitProps,
        searchFormProps,
    };

    return { context };
};
