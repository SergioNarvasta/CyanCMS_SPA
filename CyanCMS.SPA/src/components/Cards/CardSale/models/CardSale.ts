import type { CardContainerProps } from '../../CardContainer/models';

export interface CardSaleProps extends Partial<CardContainerProps> {
    title: string;
    value: number;
    icon?: string;
    isCurrency?: boolean;
    key?: string;
    hideValue?: boolean;
    headerStyle?: React.CSSProperties;
    iconComponent?: JSX.Element;
    showToolTip: boolean;
    toolTipMessage?: string;
}
