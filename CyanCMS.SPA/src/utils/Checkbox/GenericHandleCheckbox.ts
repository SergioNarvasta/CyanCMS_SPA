import type { IGenericHandleCheckbox } from '../../components/Payments/Admin/ProcessControl/models/IGenericHandleCheckbox';

export const genericHandleCheckbox = (parameters: IGenericHandleCheckbox) => {
    const isChecked = parameters.e.target.checked;
    const valueCheckbox = parameters.e.target.value;

    if (isChecked && !parameters.dataList.includes(valueCheckbox)) {
        parameters.setState((data: any) => [...data, valueCheckbox]);
    } else {
        const newList = parameters.dataList.filter(
            (data) => data !== valueCheckbox,
        );
        parameters.setState(newList);
    }
};
