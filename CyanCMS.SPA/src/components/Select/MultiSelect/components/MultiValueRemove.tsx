import { MdOutlineClose } from 'react-icons/md';

import type { SelectOption } from '../../CustomReactSelect';
import type { MultiValueRemoveProps } from 'react-select';

export const MultiValueRemove = (props: MultiValueRemoveProps) => {
    return (
        <div
            className="btn btn-white py-1 px-3 text-white d-flex gap-1 align-items-center"
            onClick={(e) => props.innerProps.onClick?.(e)}
        >
            {(props.data as SelectOption).label}
            <MdOutlineClose size={20} />
        </div>
    );
};
