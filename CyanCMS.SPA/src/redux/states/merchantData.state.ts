import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LocalStorage, type MerchantDataState, type Store } from '../../models';

export const MerchantDataEmptyState: MerchantDataState = {
    merchantCode: localStorage.getItem(LocalStorage.MERCHANT_CODE) ?? '',
    merchantId: 0,
    merchantName: '',
    stores: [],
    currentStore: undefined,
};

export const merchantDataSlice = createSlice({
    name: 'merchantData',
    initialState: MerchantDataEmptyState,
    reducers: {
        insertMerchantData: (state, action) => ({
            ...state,
            ...action.payload,
            currentStore: { ...state.currentStore },
        }),
        updateMerchantData: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        setCurrentStore: (state, { payload }: PayloadAction<Store>) => {
            state.currentStore = payload;
        },
    },
});

export const { insertMerchantData, updateMerchantData, setCurrentStore } =
    merchantDataSlice.actions;

export default merchantDataSlice.reducer;
