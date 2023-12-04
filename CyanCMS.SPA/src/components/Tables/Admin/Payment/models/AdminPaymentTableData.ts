import type { Meta } from '../../../../../models';
export interface AdminPaymentTableWrapper {
    adminSalesInfo: AdminPaymentTableData[];
    meta: Meta;
}

export interface AdminPaymentTableData {
    dayDelivered: string;
    orderId: number;
    subOrderId: number;
    merchantId: string;
    merchantName: string;
    ruc: string;
    commissionPercent: number;
    comissionAmount: number;
    nmv: number;
}
