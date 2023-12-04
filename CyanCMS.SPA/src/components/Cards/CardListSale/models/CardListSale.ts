import type { SalesEndpointResponse } from '../../../../models';

export interface CardListSaleProps {
    dataOptions?: Omit<SalesEndpointResponse, 'dataGraph'>;
}
