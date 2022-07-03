/* react */
import { FC, memo, useContext } from 'react';
/* context */
import { PokemonViewContext } from './usePokemonView.hook';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* styles */
import './PokemonRightContent.scss';

const PokemonRightContent: FC = () => {
    const {
        /* states */
        pokemon,
    } = useContext(PokemonViewContext);

    if (!Array.isArray(pokemon.moves) || pokemon.moves.length === 0)
        return <></>;

    return (
        <PanelLayout orientation="vertical">
            <table className="pokemon-moves">
                <thead className="pokemon-moves__header">
                    <tr className="pokemon-moves__row">
                        <th>Pokemon Move</th>

                        <th>Game Versions</th>
                    </tr>
                </thead>

                <tbody className="pokemon-moves__content">
                    {pokemon.moves.map((move, index) => (
                        <tr
                            key={index}
                            className="pokemon-moves__row pokemon-moves__row--content">
                            <td>{move.name}</td>

                            <td className="pokemon-moves__amount">
                                {move.versionsCount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </PanelLayout>
    );
};

export default memo(PokemonRightContent);
