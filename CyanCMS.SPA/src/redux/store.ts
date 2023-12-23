import {
    configureStore,
    type Action,
    type ThunkAction,
} from '@reduxjs/toolkit';

import type { EndpointsDataType, MerchantDataState, User } from '../models';
import {
    addressApi,
    catalogApi,
    commonApi,
    configApi,
    customerAdminApi,
    customerApi,
    financeApi,
    identityApi,
    inventoryApi,
    reviewsApi,
    salesApi,
    storageApi,
} from '../services';
import {
    endpointSlice,
    invitationSlice,
    merchantDataSlice,
    onboardingSlice,
    userSlice,
} from './states';

export interface AppStore {
    user: User;
    endpoints: EndpointsDataType;
    merchantData: MerchantDataState;
}

export const store = configureStore({
    reducer: {
        [addressApi.reducerPath]: addressApi.reducer,
        [identityApi.reducerPath]: identityApi.reducer,
        [inventoryApi.reducerPath]: inventoryApi.reducer,
        [catalogApi.reducerPath]: catalogApi.reducer,
        [commonApi.reducerPath]: commonApi.reducer,
        [configApi.reducerPath]: configApi.reducer,
        [customerAdminApi.reducerPath]: customerAdminApi.reducer,
        [customerApi.reducerPath]: customerApi.reducer,
        [financeApi.reducerPath]: financeApi.reducer,
        [reviewsApi.reducerPath]: reviewsApi.reducer,
        [salesApi.reducerPath]: salesApi.reducer,
        [storageApi.reducerPath]: storageApi.reducer,
        user: userSlice.reducer,
        endpoints: endpointSlice.reducer,
        merchantData: merchantDataSlice.reducer,
        onboarding: onboardingSlice.reducer,
        invitations: invitationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            addressApi.middleware,
            identityApi.middleware,
            inventoryApi.middleware,
            catalogApi.middleware,
            commonApi.middleware,
            configApi.middleware,
            customerAdminApi.middleware,
            customerApi.middleware,
            financeApi.middleware,
            reviewsApi.middleware,
            salesApi.middleware,
            storageApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
