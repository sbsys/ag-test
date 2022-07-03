/* react */
import { FC, memo } from 'react';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import PokemonSearch from './PokemonSearch';
import PokemonSpriteList from './PokemonSpriteList';

const PokemonLeftContent: FC = () => {
    return (
        <PanelLayout orientation="vertical">
            <PokemonSearch />

            <PokemonSpriteList />
        </PanelLayout>
    );
};

export default memo(PokemonLeftContent);
