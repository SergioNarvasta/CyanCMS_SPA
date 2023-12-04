import type { DateRange } from 'react-day-picker';
import type {
    IAmountGroup,
    IGenericHandleCheckbox,
} from '../../Payments/Admin/ProcessControl/models/IGenericHandleCheckbox';

import type { AmountProps } from '../../Tables/Admin/Payment/models';

export interface ISelectCheckboxDropDown {
    placeholder: string;
    data: DropdownTextValue[];
    handleCheckBox: (e: any) => void;
    checkBoxList: any[];
    toggleStyles?: React.CSSProperties;
}

export interface IAdminPaymentDropDown {
    genericHandleCheckBox: (e: any) => void;
    merchantGroup: IGenericHandleCheckbox;
    subOrdersGroup: IGenericHandleCheckbox;
    amountGroup: IAmountGroup;
    selectedRange: DateRange | undefined;
    subOrderIdList: string[];
    merchantIdList: string[];
    amountMinMax: AmountProps;
    handleShowTable: (e: any, resetFilters: boolean) => void;
    disabledFilterButtons: boolean;
    setDisabledFilterButtons: (data: boolean) => void;
}

export interface DropdownTextValue {
    text: string;
    value: string;
}
