export interface AdminPaymentTableProps {
    fromDate: Date;
    toDate: Date;
    subOrderIdList: string[];
    merchantIdList: string[];
    amountMinMax: AmountProps;
}

export interface AmountProps {
    min: number;
    max: number;
}
