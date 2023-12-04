/* eslint-disable @typescript-eslint/indent */
import type { Store } from '../../../../models';
import type { BadgeProps } from '../../../Badge/models';
import type { BasicSelectProps } from '../../../Select';

export interface CardCategoryProps
    extends BadgeProps,
        Pick<BasicSelectProps, 'options'> {
    children?: React.ReactNode;
    orderBy: string;
    currentStore: Store;
}
