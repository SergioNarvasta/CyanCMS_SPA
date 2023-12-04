import React, { forwardRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import type { ICustomMenu } from '../../models/ICustomMenu';

import './CustomMenu.scss';

export const CustomMenu = forwardRef(
    ({ children, style, className }: ICustomMenu, ref) => {
        const [value, setValue] = useState('');
        return (
            <div
                ref={ref as React.RefObject<HTMLDivElement>}
                style={style}
                className={className}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    value={value}
                />
                <ul className="list-unstyled px-2 list-height-capped">
                    {React.Children.toArray(children).filter(
                        (child: any) =>
                            !value ||
                            child.props?.row
                                .toString()
                                .toLowerCase()
                                .startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);
