/* react */
import { FC, memo, useContext } from 'react';
/* context */
import { PokemonViewContext } from './usePokemonView.hook';
/* components */
import { Button, Field, Legend } from 'shared/components';
/* styles */
import './PokemonSearch.scss';

const BASE_CLASS_NAME = 'pokemon-search';

const PokemonSearch: FC = () => {
    const {
        /* props */
        searchProps,
        searchSubmitProps,
        searchFormProps,
    } = useContext(PokemonViewContext);

    return (
        <div className={BASE_CLASS_NAME}>
            <h2>
                <Legend hasDots>Find a pokemon</Legend>
            </h2>

            <form {...searchFormProps}>
                <Field
                    className={`${BASE_CLASS_NAME}__search-field`}
                    placeholder="Pokemon name, try: ditto"
                    {...searchProps}
                />

                <Button
                    className={`${BASE_CLASS_NAME}__search-submit`}
                    {...searchSubmitProps}>
                    Search
                </Button>
            </form>
        </div>
    );
};

export default memo(PokemonSearch);
