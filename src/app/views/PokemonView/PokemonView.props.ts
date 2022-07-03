/* react */
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
/* props */
import { ButtonProps, FieldProps } from 'shared/components';
/* types */
import { Pokemon } from 'app/types';

export interface IPokemonViewContext {
    /* states */
    pokemon: Pokemon;
    /* props */
    searchProps: FieldProps;
    searchSubmitProps: ButtonProps;
    searchFormProps: DetailedHTMLProps<
        FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    >;
}
