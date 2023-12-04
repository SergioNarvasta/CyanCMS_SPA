import { useState } from 'react';
import { useAsync } from '../../../hooks';
import useFetchAndLoad from '../../../hooks/useFetchAndLoad';
import type { Product } from '../../../models';
import { getTopProductsApiData } from '../../../services/Products';
import { formatDate, getPriorDate } from '../../../utilities';

import { Badge } from '../../Badge';
import { Dropdown } from '../../Dropdown';
import type { ISelectOption } from '../../Select';
import { CardContainer } from '../CardContainer';
import { CategoryTable } from './components';
import type { CardCategoryProps } from './models';

export const CardCategory = ({
    title,
    minWidth,
    options,
    orderBy,
    currentStore,
}: CardCategoryProps): JSX.Element => {
    const [currentOption, setCurrentOption] = useState<ISelectOption>(
        options[0],
    );

    const { callEndpoint } = useFetchAndLoad();

    const [products, setProducs] = useState<Product[]>([]);

    const endDate = formatDate(new Date());
    const startDate = formatDate(getPriorDate(currentOption?.value ?? 6));

    const updateProducts = (data: Product[]) => {
        setProducs(data);
    };

    const handleDropdown = (value: number) => {
        setCurrentOption(
            options.find((opt) => opt.value === value) ?? options[0],
        );
    };

    const getTopProductsData = async () => {
        return await callEndpoint(
            await getTopProductsApiData(
                currentStore?.id,
                orderBy,
                10,
                startDate,
                endDate,
            ),
        );
    };

    useAsync(
        getTopProductsData,
        updateProducts,
        () => {},
        () => {},
        [currentOption, currentStore?.id],
    );

    return (
        <CardContainer
            maxHeight={356}
            maxWidth={340}
            height={356}
            width={340}
            extraClass="w-100 py-3"
        >
            <div
                className="d-flex justify-content-between align-items-center gap-2"
                style={{ minHeight: 55 }}
            >
                <div style={{ maxWidth: 126 }}>
                    <h3 className="m-0">
                        <Badge title={title} minWidth={minWidth} />
                    </h3>
                </div>
                <Dropdown
                    options={options}
                    currentOption={currentOption}
                    handleDropdown={handleDropdown}
                />
            </div>
            {!!products.length && <CategoryTable products={products} />}
        </CardContainer>
    );
};
