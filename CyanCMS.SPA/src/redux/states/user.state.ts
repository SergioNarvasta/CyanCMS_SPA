import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
    LocalStorage,
    type ProfileEndpointReturnDataDTO,
    type User,
} from '../../models';

export const UserEmptyState: User = {
    storeId: localStorage.getItem(LocalStorage.STORE_ID) ?? '',
    merchantCode: localStorage.getItem(LocalStorage.MERCHANT_CODE) ?? '',
    isAuthenticated: false,
    token: localStorage.getItem(LocalStorage.TOKEN_NAME) ?? '',
    tokenOnboardingJuntoz: '',
    isLoadingValidation: true,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    profile: {} as ProfileEndpointReturnDataDTO,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
        createUser: (_, action) => action.payload,
        modifyUser: (state, { payload }: PayloadAction<Partial<User>>) => ({
            ...state,
            ...payload,
        }),
        resetUser: () => UserEmptyState,
        setIsAuthenticated: (state, { payload }: PayloadAction<boolean>) => {
            state.isAuthenticated = payload;
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            state.isLoadingValidation = false;
        },
    },
});

export const { createUser, modifyUser, resetUser, setIsAuthenticated, logOut } =
    userSlice.actions;

export default userSlice.reducer;
