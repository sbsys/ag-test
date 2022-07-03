/* react */
import { FC, memo } from 'react';
/* custom hook */
import { PokemonViewContext, usePokemonView } from './usePokemonView.hook';
/* layouts */
import { PanelLayout } from 'shared/layouts';
/* components */
import PokemonLeftContent from './PokemonLeftContent';
import PokemonRightContent from './PokemonRightContent';
/* styles */
import './PokemonView.scss';

const BASE_CLASS_NAME = 'pokemon-view';

const PokemonView: FC = () => {
    const { context } = usePokemonView();

    return (
        <PokemonViewContext.Provider value={context}>
            <PanelLayout className={BASE_CLASS_NAME}>
                <div className={`${BASE_CLASS_NAME}__left`}>
                    <PokemonLeftContent />
                </div>

                <div className={`${BASE_CLASS_NAME}__right`}>
                    <PokemonRightContent />
                </div>
            </PanelLayout>
        </PokemonViewContext.Provider>
    );
};

export default memo(PokemonView);
