/* react */
import { FC, memo, useContext } from 'react';
/* context */
import { PokemonViewContext } from './usePokemonView.hook';
/* layouts */
import { ScrollLayout } from 'shared/layouts';
/* styles */
import './PokemonSpriteList.scss';

const PokemonSpriteList: FC = () => {
    const {
        /* states */
        pokemon,
    } = useContext(PokemonViewContext);

    if (!Array.isArray(pokemon.sprites) || pokemon.sprites.length === 0)
        return (
            <span className="pokemon-sprite-list__no-imgs">
                No pokemon sprites yet
            </span>
        );

    return (
        <ScrollLayout orientation="vertical">
            <div className="pokemon-sprite-list">
                {pokemon.sprites.map((spriteSrc, index) => (
                    <img
                        key={index}
                        className="pokemon-sprite-list__img"
                        src={spriteSrc}
                        alt={`sprite ${index + 1}`}
                    />
                ))}
            </div>
        </ScrollLayout>
    );
};

export default memo(PokemonSpriteList);
