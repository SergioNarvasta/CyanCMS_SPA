import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { UserTypeEnum, type InvitationState } from '../../models';

const initialState: InvitationState = {
    isValid: false,
    userType: UserTypeEnum.NONE,
    merchantName: '',
    roles: '',
    tokenInvitation: '',
    noneUserEmail: '',
    formData: {
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        userIdentification: '',
        userIdentificationType: null,
    },
};

export const invitationSlice = createSlice({
    name: 'Invitations',
    initialState,
    reducers: {
        setInvitationToken: (state, { payload }: PayloadAction<string>) => {
            state.tokenInvitation = payload;
        },
        setInvitationData: (
            state,
            { payload }: PayloadAction<Partial<InvitationState>>,
        ) => {
            return {
                ...state,
                ...payload,
            };
        },
        resetInvitationData: (_) => {
            return initialState;
        },
    },
});

export const { setInvitationToken, setInvitationData, resetInvitationData } =
    invitationSlice.actions;
