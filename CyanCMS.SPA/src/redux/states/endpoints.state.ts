import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { EndpointsDataType } from '../../models';

export const EndpointsEmptyState: EndpointsDataType = {};

export const endpointSlice = createSlice({
    name: 'endpoints',
    initialState: EndpointsEmptyState,
    reducers: {
        createEndpoints: (_, { payload }: PayloadAction<EndpointsDataType>) =>
            payload,
    },
});

export const { createEndpoints } = endpointSlice.actions;

export default endpointSlice.reducer;
