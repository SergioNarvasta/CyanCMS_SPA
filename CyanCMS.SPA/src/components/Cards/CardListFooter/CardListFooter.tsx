import Row from 'react-bootstrap/Row';

import { CardCategory, CardReview } from '../';
import { useAppSelector } from '../../../hooks';
import type { MerchantDataState } from '../../../models';
import { defaultOptions } from '../../Select';

export const CardListFooter = (): JSX.Element => {
    const { currentStore } = useAppSelector<MerchantDataState>(
        (state) => state?.merchantData,
    );

    if (currentStore === undefined) {
        return <></>;
    }
    return (
        <Row
            sm={1}
            lg={2}
            xl={3}
            className="d-flex justify-content-between m-0 p-0 gap-2"
        >
            <CardReview />

            <CardCategory
                title="Top 10"
                options={defaultOptions}
                orderBy="DESC"
                key={'DESC'}
                currentStore={currentStore}
            />

            <CardCategory
                title="Menos vendidos"
                options={defaultOptions}
                orderBy="ASC"
                key={'ASC'}
                currentStore={currentStore}
            />
        </Row>
    );
};
