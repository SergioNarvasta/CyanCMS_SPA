import { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { useAppDispatch, useSessionToken } from '../../hooks';
import { LocalStorage } from '../../models/enum/localStorage';
import { modifyUser } from '../../redux/states/user.state';
import { MainLoader } from '../Loaders/MainLoader';
import { RedirectExternal } from '../RedirectExternal';
import { SignInProperties } from './enums/SignInProperties';

export const RedirectSignIn = () => {
    const [queryString] = useSearchParams();
    const dispatch = useAppDispatch();

    const userToken: string = queryString.get(SignInProperties.TOKEN) ?? '';
    const merchantCode: string =
        queryString.get(SignInProperties.MERCHANT_CODE) ?? '';
    const storeId: string = queryString.get(SignInProperties.STORE_ID) ?? '';

    const { data, isError, isLoading } = useSessionToken(userToken);

    useEffect(() => {
        if (data && merchantCode && storeId) {
            // * Save merchantCode and storeId in localStorage
            localStorage.setItem(LocalStorage.TOKEN_NAME, data.access_token);
            localStorage.setItem(LocalStorage.MERCHANT_CODE, merchantCode);
            localStorage.setItem(LocalStorage.STORE_ID, storeId);

            // * update user data
            dispatch(
                modifyUser({
                    isAuthenticated: true,
                    merchantCode,
                    storeId,
                }),
            );
        }
    }, [data, dispatch, merchantCode, storeId]);

    // TODO: set this to loader component
    if (isLoading) return <MainLoader />;

    if (isError) return <RedirectExternal />;

    return <Navigate to="/inicio" />;
};
