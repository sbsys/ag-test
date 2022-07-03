/* react */
import { FC, memo } from 'react';
/* props */
import { PanelLayoutProps } from './PanelLayout.props';
/* utils */
import { classNames } from 'shared/utils';
/* types */
import { Orientation } from 'shared/types';
/* styles */
import styles from './PanelLayout.module.scss';

const orientationStrategy: Record<Orientation, string> = {
    horizontal: styles.Horizontal,
    vertical: styles.Vertical,
};

const PanelLayout: FC<PanelLayoutProps> = ({
    className,
    orientation,
    children,
    ...rest
}) => {
    return (
        <div
            className={classNames(
                styles.PanelLayout,
                orientation && orientationStrategy[orientation],
                className
            )}
            {...rest}>
            {typeof children === 'function' ? children() : children}
        </div>
    );
};

export default memo(PanelLayout);
