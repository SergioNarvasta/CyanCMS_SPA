import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { OnboardingType, type OnboardingState } from '../../models';
import type {
    RegisterForm2,
    RegisterForm3,
    RegisterForm4,
    RegisterForm5,
} from '../../pages/Onboarding/Register/components';

const initialState: OnboardingState = {
    email: '',
    hashedPassword: '',
    tipoRuc: '',
    merchantName: '',
    currentStep: 0,
    onboardingType: OnboardingType.NEW_MERCHANT,
    form2: {
        isSended: false,
        merchantName: '',
        tipoRuc: '',
        RUC: '',
        commercialName: '',
        numberProductsInCatalog: '',
        categoryId: '',
        integrationPlatforms: [],
        websiteUrl: '',
        facebookUrl: '',
        tiktokUrl: '',
        instagramUrl: '',
    },
    form3: {
        isSended: false,
        attorneyName: '',
        attorneySurName: '',
        identificationType: '',
        identificationNumber: '',
        attorneyDocuments: {
            fichaRuc: '',
            identification: '',
            vigenciaPoder: '',
        },
    },
    form4: {
        isSended: false,
        contactName: '',
        contactSurname: '',
        contactPhoneNumber: '',
        contactEmail: '',
        bankType: '',
        accountType: '',
        bankAccountNumber: '',
        bankInterbankAccountNumber: '',
        financeDocument: '',
    },
    form5: {
        isSended: false,
        fichaInformacionFileUrl: '',
        solicitudAfiliacionFileUrl: '',
        declaracionJuradaFileDJOFUrl: '',
        declaracionJuradaAntiCorrupcionYFraudeFileUrl: '',
        politicaYGarantiaDeSatisfacionFileUrl: '',
        terminosYCondiciones: false,
        politicaPrivacidad: false,
        usoDatosParaPublicidad: false,
    },
};

export const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        updateFormUser: (
            state,
            { payload }: PayloadAction<Partial<OnboardingState>>,
        ) => {
            return {
                ...state,
                ...payload,
            };
        },
        setForm2: (
            state,
            { payload }: PayloadAction<Partial<RegisterForm2>>,
        ) => {
            state.form2 = {
                isSended: true,
                ...payload,
            };
        },
        setForm3: (
            state,
            { payload }: PayloadAction<Partial<RegisterForm3>>,
        ) => {
            state.form3 = {
                isSended: true,
                ...payload,
            };
        },
        setForm4: (
            state,
            { payload }: PayloadAction<Partial<RegisterForm4>>,
        ) => {
            state.form4 = {
                isSended: true,
                ...payload,
            };
        },
        setForm5: (
            state,
            { payload }: PayloadAction<Partial<RegisterForm5>>,
        ) => {
            state.form5 = {
                isSended: true,
                ...payload,
            };
        },
        clearOnboardingState: () => {
            return initialState;
        },
    },
});

export const {
    updateFormUser,
    setForm2,
    setForm3,
    setForm4,
    setForm5,
    clearOnboardingState,
} = onboardingSlice.actions;
