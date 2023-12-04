import { CardContainer } from '../../../Cards';
import type { IMetricsCard } from './models/IMetricsCard';

import './MetricsCard.scss';
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from 'react-icons/md';
import { addZeroes } from '../../../../utilities/Numbers/AddZeroes';
import { MetricsCardTitle } from '../../../../models/enum/MetricsCardTitle';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { ToolTip } from '../../../Tooltip/ToolTip';
import { Placements } from '../../../../models/enum/Placement';

export const MetricsCard = ({
    comparisonValue,
    isNegative,
    value,
    cardTitle,
    currentPeriodValue,
    previousPeriodValue,
    showToolTip,
    toolTipMessage,
}: IMetricsCard) => {
    const noItemsTitles = [
        MetricsCardTitle.VENTAS,
        MetricsCardTitle.PERIODO_ACTUAL,
    ];

    const shouldNotDisplayItemText = noItemsTitles.some((x) => x === cardTitle);

    const popOver = (
        <Popover id="popover-basic">
            <Popover.Body>
                <span
                    style={{ color: `${!isNegative ? '#a0c63b' : '#f30b0b'}` }}
                >
                    {addZeroes(previousPeriodValue)}
                </span>
            </Popover.Body>
        </Popover>
    );

    return (
        <CardContainer
            maxWidth={190}
            maxHeight={110}
            extraClass="complete-shadow col-lg-4 col-4"
        >
            <div className="metrics-card">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <span className="metrics-card-title">{cardTitle}</span>
                </div>
                <div className="metrics-card-value-container">
                    <span className="separation-metrics">
                        {shouldNotDisplayItemText
                            ? 'S/' + addZeroes(value)
                            : value}
                    </span>
                    {cardTitle === MetricsCardTitle.PRECIOS_ESPECIALES
                        ? 'productos'
                        : !shouldNotDisplayItemText
                        ? ' pedidos'
                        : ''}
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={popOver}
                    >
                        <>
                            {previousPeriodValue === currentPeriodValue ? (
                                <div className="attached-value attached-value-neutro">
                                    {comparisonValue}%
                                </div>
                            ) : previousPeriodValue === 0 ? (
                                <div className="from-zero-positive">
                                    <MdOutlineArrowUpward size={15} />+
                                </div>
                            ) : currentPeriodValue === 0 ? (
                                <div className="from-zero-negative">
                                    <MdOutlineArrowDownward size={15} />-
                                </div>
                            ) : !isNegative ? (
                                <div className="attached-value attached-value-positive">
                                    <MdOutlineArrowUpward size={15} />+
                                    {comparisonValue}%
                                </div>
                            ) : (
                                <div className="attached-value attached-value-negative">
                                    <MdOutlineArrowDownward size={15} />-
                                    {comparisonValue}%
                                </div>
                            )}
                        </>
                    </OverlayTrigger>
                </div>
                {showToolTip && (
                    <div className="metrics-card-tooltip">
                        <ToolTip
                            content={toolTipMessage ?? ''}
                            placement={Placements.BOTTOM}
                            key={`tooltip-${cardTitle}`}
                        />
                    </div>
                )}
            </div>
        </CardContainer>
    );
};
