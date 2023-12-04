import type { IconBaseProps } from 'react-icons/lib';
import {
    MdAutoAwesome,
    MdCampaign,
    MdDepartureBoard,
    MdOutlineAddBusiness,
    MdOutlineHome,
    MdOutlineListAlt,
    MdOutlineLocalAtm,
    MdOutlineRequestPage,
    MdOutlineSettings,
    MdTrendingUp,
    MdAssignment,
    MdShoppingCart,
    // MdAutoAwesome,
} from 'react-icons/md';

import {
    AllowedMerchantRolesByRoute,
    ConfigurationList,
    OnboardingList,
} from '@/models';
import type { NavBarLinkProps } from '../../NavBarLink/models/NavBarLinkProps';
import { isProductionBuild } from '@/utilities/Environment/isProductionBuild';

const defaultSize = 20;

export const defaultIconProps: Partial<IconBaseProps> = {
    size: defaultSize,
    style: {
        minWidth: defaultSize,
    },
};

export const links: NavBarLinkProps[] = [
    {
        name: 'Inicio',
        to: 'inicio',
        redirect: false,
        iconComponent: <MdOutlineHome {...defaultIconProps} />,
        show: true,
        merchantRoles: AllowedMerchantRolesByRoute.HOME,
    },
    {
        name: 'Catálogo',
        to: 'catalogo',
        redirect: false,
        iconComponent: <MdAssignment {...defaultIconProps} />,
        show: !isProductionBuild,
        isLink: false,
        merchantRoles: AllowedMerchantRolesByRoute.HOME,
        subLinks: [
            {
                name: 'Productos',
                to: '/catalogo/productos',
                iconComponent: <MdShoppingCart {...defaultIconProps} />,
            },
        ],
    },
    {
        name: 'Pagos',
        to: 'pagos',
        redirect: false,
        iconComponent: <MdOutlineLocalAtm {...defaultIconProps} />,
        isLink: false,
        subLinks: [
            {
                name: 'Estado de cuenta',
                to: '/pagos',
                iconComponent: <MdOutlineRequestPage {...defaultIconProps} />,
            },
        ],
        show: true,
        merchantRoles: AllowedMerchantRolesByRoute.PAYMENTS,
    },
    {
        name: 'Métricas',
        to: 'metricas',
        redirect: false,
        iconComponent: <MdTrendingUp {...defaultIconProps} />,
        show: true,
        merchantRoles: AllowedMerchantRolesByRoute.METRICS,
    },
    {
        name: 'Marketing',
        to: 'marketing',
        redirect: false,
        iconComponent: <MdCampaign {...defaultIconProps} />,
        isLink: false,
        show: true,
        merchantRoles: AllowedMerchantRolesByRoute.HOME,
        subLinks: [
            {
                name: 'Campaña precio',
                to: 'marketing/campanas-de-precios',
                iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
                merchantRoles: AllowedMerchantRolesByRoute.HOME,
            },
            {
                name: 'Campaña subsidio',
                to: 'marketing/campanas-de-subsidio',
                iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
                merchantRoles: AllowedMerchantRolesByRoute.HOME,
            },
        ],
    },
    {
        name: 'Logística',
        to: 'logistica',
        redirect: false,
        iconComponent: <MdDepartureBoard {...defaultIconProps} />,
        isLink: false,
        show: true,
        merchantRoles: AllowedMerchantRolesByRoute.LOGISTIC,
        subLinks: [
            {
                name: 'Almacenes',
                to: 'logistica/almacenes',
                iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
                merchantRoles: AllowedMerchantRolesByRoute.LOGISTIC_WAREHOUSES,
            },
            // {
            //     name: 'Fulfillment',
            //     to: 'logistica/fulfillment',
            //     iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
            //     merchantRoles: AllowedMerchantRolesByRoute.LOGISTIC,
            // },
        ],
    },
    {
        name: 'Configuracion',
        to: 'configuracion',
        redirect: false,
        iconComponent: <MdOutlineSettings {...defaultIconProps} />,
        isLink: false,
        subLinks: [
            {
                name: 'Documentos',
                to: 'configuracion/documentos',
                iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
                merchantRoles:
                    AllowedMerchantRolesByRoute.CONFIGURATION_DOCUMENT,
            },
            {
                name: 'Configuración de usuario',
                to: `configuracion/${ConfigurationList.CONFIGURATION_USERS}`,
                iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
                merchantRoles: AllowedMerchantRolesByRoute.CONFIGURATION_USERS,
            },
        ],
        show: true,
        merchantRoles: AllowedMerchantRolesByRoute.CONFIGURATION,
    },
    {
        name: 'Crea tu tienda',
        to: OnboardingList.ONBOARDING_SELLER,
        redirect: false,
        iconComponent: <MdOutlineAddBusiness {...defaultIconProps} />,
        show: true,
        merchantRoles: AllowedMerchantRolesByRoute.CREATE_STORE,
    },
    {
        name: 'Beneficioz',
        to: 'beneficioz',
        redirect: false,
        iconComponent: <MdAutoAwesome {...defaultIconProps} />,
        show: !isProductionBuild,
        merchantRoles: AllowedMerchantRolesByRoute.HOME,
        isLink: false,
        subLinks: [
            {
                name: 'Campaña',
                to: 'beneficioz/campana/activa',
                iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
                merchantRoles: AllowedMerchantRolesByRoute.HOME,
            },
            {
                name: 'Mis Campañas',
                to: 'beneficioz/mis-campanas',
                iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
                merchantRoles: AllowedMerchantRolesByRoute.HOME,
            },
            {
                name: 'Canjeo de beneficios',
                to: 'beneficioz/mis-beneficios',
                iconComponent: <MdOutlineListAlt {...defaultIconProps} />,
                merchantRoles:
                    AllowedMerchantRolesByRoute.BENEFICIOZ.CLAIM_BENEFICIOZ,
            },
        ],
    },
];
