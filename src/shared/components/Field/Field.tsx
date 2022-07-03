/* react */
import { FC, forwardRef, memo } from 'react';
/* props */
import { FieldProps, FieldsProps, FieldStrategy } from './Field.props';
/* components */
import TextField from './TextField';
import PasswordField from './PasswordField';
import FileField from './FileField';
/* strategy */
import { ComponentStrategy, StrategyProps } from '../ComponentStrategy';
/* utils */
import { classNames } from 'shared/utils';
/* styles */
import styles from './Field.module.scss';

const components: Record<FieldStrategy, FC<FieldsProps>> = {
    text: memo(props => <TextField inputMode="text" {...props} />),
    password: memo(props => <PasswordField inputMode="text" {...props} />),
    email: memo(props => <TextField inputMode="email" {...props} />),
    number: memo(props => <TextField inputMode="numeric" {...props} />),
    decimal: memo(props => (
        <TextField inputMode="decimal" {...props} strategy="number" />
    )),
    radio: TextField,
    checkbox: TextField,
    file: FileField,
    date: TextField,
    select: TextField,
    find_select: TextField,
    find_modal: TextField,
};

const FieldComponentStrategy = ComponentStrategy<FieldsProps, FieldStrategy>({
    components,
    Default: TextField,
});

const Field = forwardRef<
    HTMLInputElement | null,
    StrategyProps<FieldProps, FieldStrategy>
>(({ className, ...rest }, ref) => {
    const props: FieldsProps = {
        className: classNames(styles.Field, className),
        autoComplete: 'off',
        ...rest,
    };

    return <FieldComponentStrategy ref={ref} {...props} />;
});

export default memo(Field);
