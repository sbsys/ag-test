/* react */
import { FC, memo, Suspense } from 'react';
/* views */
import { PokemonView } from './views';

const App: FC = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <PokemonView />
        </Suspense>
    );
};

export default memo(App);
