import { useState, useRef } from 'react';
import { Dropdown } from 'react-bootstrap';
import { CustomToggle } from '../CustomToggle/CustomToggle';
import { CustomSelectRow } from './components/CustomSelectRow/CustomSelectRow';
import { CustomMenu } from './components/CustomMenu/CustomMenu';
import type { ISelectCheckboxDropDown } from './models/ISelectCheckboxDropdown';

export const SelectCheckboxDropDown = ({
    toggleStyles,
    placeholder,
    data,
    handleCheckBox,
    checkBoxList,
}: ISelectCheckboxDropDown) => {
    const refDiv = useRef<HTMLElement>(null);

    const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

    const handleDropdownIconClick = () => {
        if (refDiv) {
            refDiv?.current?.click();
        }
    };

    return (
        <Dropdown
            autoClose="outside"
            style={{ userSelect: 'none' }}
            onToggle={() => {
                setDropDownOpen(!dropDownOpen);
            }}
        >
            <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
                toggleStyle={toggleStyles}
                handleDropdownIconClick={handleDropdownIconClick}
                ref={refDiv}
                dropDownOpen={dropDownOpen}
            >
                {placeholder}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                {data.map((row) => (
                    <CustomSelectRow
                        row={row.text}
                        value={row.value}
                        handleCheckBox={handleCheckBox}
                        checkBoxList={checkBoxList}
                        key={row.value}
                    />
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
