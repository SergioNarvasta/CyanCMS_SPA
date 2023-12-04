import { useMemo } from 'react';

import { formatCurrency } from '../../../utilities';
import { CardContainer } from '../CardContainer';
import type { CardSaleProps } from './models';

import './CardSale.scss';
import { ToolTip } from '../../Tooltip/ToolTip';
import { Placements } from '../../../models/enum/Placement';

export const CardSale = ({
    title,
    value,
    icon,
    isCurrency = false,
    headerStyle,
    hideValue,
    iconComponent,
    maxWidth = 206,
    maxHeight,
    showToolTip,
    toolTipMessage,
}: CardSaleProps) => {
    const formatValue: string | number = useMemo(
        () => (isCurrency ? formatCurrency(value) : value),
        [isCurrency, value],
    );

    // TODO: Remove temporal validation
    const renderValue = hideValue ? '--' : formatValue;
    return (
        <CardContainer
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            extraClass="mb-2 position-relative"
        >
            <div
                className="d-flex gap-2 align-items-center position-relative"
                style={headerStyle}
            >
                {iconComponent ?? (
                    <img src={icon} alt={title} className="card-sale__image" />
                )}
                <span className="card-sale__title">{title}</span>
            </div>
            <span className="card-sale__value p-1">{renderValue}</span>
            <span className="card-sale__line"></span>
            {showToolTip && (
                <div className="metrics-card-tooltip">
                    <ToolTip
                        content={toolTipMessage ?? ''}
                        placement={Placements.BOTTOM}
                        key={`tooltip-${title}`}
                    />
                </div>
            )}
        </CardContainer>
    );
};
