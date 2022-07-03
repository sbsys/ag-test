/* react */
import { FC, memo } from 'react';
/* props */
import { ScrollLayoutProps } from './ScrollLayout.props';
/* layouts */
import { PanelLayout } from '../PanelLayout';
/* utils */
import { classNames } from 'shared/utils';
/* types */
import { Orientation } from 'shared/types';
/* styles */
import styles from './ScrollLayout.module.scss';

const orientationStrategy: Record<Orientation, string> = {
    horizontal: styles.Horizontal,
    vertical: styles.Vertical,
};

const ScrollLayout: FC<ScrollLayoutProps> = ({
    classNameContent,
    orientation,
    children,
    ...rest
}) => {
    return (
        <PanelLayout orientation={orientation} {...rest}>
            <div
                className={classNames(
                    styles.ScrollLayout,
                    orientation && orientationStrategy[orientation],
                    classNameContent
                )}>
                {typeof children === 'function' ? children() : children}
            </div>
        </PanelLayout>
    );
};

export default memo(ScrollLayout);
