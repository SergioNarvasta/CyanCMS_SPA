import { useState } from 'react';
import { AdaptSalesInfo } from '../../adapters';
import { useAppSelector, useAsync } from '../../hooks';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import {
    EndpointsName,
    LocalStorage,
    type SalesEndpointResponse,
    type SalesEndpointReturnDataDTO,
} from '../../models';
import { getSalesData } from '../../services';
import { formatDate, getPriorDate } from '../../utilities';
import { CardListSale } from '../Cards';
import { Chart } from '../Chart';

export const SalesInfo = () => {
    const [salesData, setSalesData] = useState<SalesEndpointResponse>();
    const [maxTicksLimit, setMaxTicksLimit] = useState(7);
    const { callEndpoint } = useFetchAndLoad();

    const [prevDays, setPrevDays] = useState(6);
    const [cardsInfo, setCardsInfo] =
        useState<Omit<SalesEndpointResponse, 'dataGraph'>>();
    const priorDate = formatDate(getPriorDate(prevDays));

    const { currentStore, stores } = useAppSelector(
        (state) => state.merchantData,
    );

    const apiServicesUrl = useAppSelector((state) => state.endpoints);

    const getSalesApiData = async () => {
        return callEndpoint(
            await getSalesData(
                apiServicesUrl[EndpointsName.SALES_API],
                currentStore?.id ??
                    +(
                        stores[0]?.id ??
                        localStorage.getItem(LocalStorage.STORE_ID)
                    ),
                priorDate,
                formatDate(new Date()),
            ),
        );
    };

    const handleData = (data: SalesEndpointReturnDataDTO) => {
        const newData = AdaptSalesInfo(data);
        setSalesData(newData);
        setCardsInfo({
            total: newData.total,
            totalFulfillment: newData.totalFulfillment,
            totalOrders: newData.totalOrders,
            ticketPromedio: newData.ticketPromedio,
            totalPendingOrdes: newData.totalPendingOrdes,
        });
    };

    useAsync(
        getSalesApiData,
        handleData,
        () => {},
        () => {},
        [priorDate, currentStore?.id],
    );

    const handleDateRange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.value) {
            case '6':
                setPrevDays(6);
                setMaxTicksLimit(6);
                break;
            case '14':
                setPrevDays(14);
                setMaxTicksLimit(4);
                break;
            case '29':
                setPrevDays(29);
                setMaxTicksLimit(5);
                break;
            case '89':
                setPrevDays(89);
                setMaxTicksLimit(7);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <CardListSale dataOptions={cardsInfo} />
            <Chart
                data={salesData?.dataGraph ?? []}
                maxTicksLimit={maxTicksLimit}
                handleDateRange={handleDateRange}
            />
        </>
    );
};
