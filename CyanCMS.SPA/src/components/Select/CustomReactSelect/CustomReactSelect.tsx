/* eslint-disable react/prop-types */
import { Controller, type Path, type PathValue } from 'react-hook-form';
import Select, { components, type CSSObjectWithLabel } from 'react-select';

import { InputOption } from './components';
import type { CustomReactSelectProps, SelectOption } from './models';

export const CustomReactSelect = <T extends object>({
    options,
    control,
    name = undefined,
    controlled = false,
    withCheckbox,
    placeholder,
    isInvalid,
    ...props
}: CustomReactSelectProps<T>) => {
    if (name && control && controlled) {
        return (
            <Controller
                name={name}
                control={control}
                render={({ field: { name, onChange, ref, value } }) => (
                    <Select
                        name={name}
                        ref={ref}
                        onChange={(e) => onChange(e as PathValue<T, Path<T>>)}
                        value={value as SelectOption}
                        options={options}
                        isSearchable={false}
                        isClearable={false}
                        hideSelectedOptions={false}
                        placeholder={placeholder}
                        noOptionsMessage={() => <>No hay opciones</>}
                        loadingMessage={() => <>Cargando...</>}
                        {...props}
                        components={{
                            IndicatorSeparator: null,
                            Option: withCheckbox
                                ? InputOption
                                : components.Option,
                            MultiValue: () => null,
                            Input: (props) => {
                                if (
                                    withCheckbox &&
                                    props.hasValue &&
                                    !props['aria-expanded']
                                ) {
                                    return (
                                        <div
                                            style={{
                                                width: '100%',
                                                color: 'hsl(0, 0%, 50%)',
                                            }}
                                        >
                                            {placeholder}
                                        </div>
                                    );
                                }
                                return (
                                    <components.Input
                                        {...props}
                                        autoFocus={Boolean(
                                            props['aria-expanded'],
                                        )}
                                    />
                                );
                            },
                            ...props.components,
                        }}
                        styles={{
                            control(base) {
                                return {
                                    ...base,
                                    borderRadius: '8px',
                                    borderColor: isInvalid
                                        ? '#dc3545'
                                        : 'rgba(0, 0, 0, 0.3)',
                                    boxShadow:
                                        '0px -1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
                                    ':hover': {
                                        borderColor: isInvalid
                                            ? '#dc3545'
                                            : '#8038A6',
                                    },
                                    fontSize: '.9rem',
                                };
                            },
                            singleValue(base) {
                                return {
                                    ...base,
                                    color: '#8038a6',
                                    fontWeight: '600',
                                };
                            },
                            multiValue(base) {
                                return {
                                    ...base,
                                    color: '#fff',
                                    backgroundColor: '#8038a6',
                                    fontWeight: '600',
                                    borderRadius: '10px',
                                    ':hover': {
                                        opacity: '0.8',
                                    },
                                };
                            },
                            placeholder(base, props) {
                                return {
                                    ...base,
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                };
                            },
                            option(base, props) {
                                const commonStyles: CSSObjectWithLabel = {
                                    backgroundColor: '#e9ecef',
                                    color: '#8038a6',
                                    fontWeight: '600',
                                    fontSize: '.9rem',
                                };

                                const optionStyle: CSSObjectWithLabel =
                                    props.isSelected || props.isFocused
                                        ? { ...commonStyles }
                                        : {
                                              backgroundColor: 'white',
                                              color: '#858688',
                                              fontWeight: '600',
                                              fontSize: '.9rem',
                                          };

                                return {
                                    ...base,
                                    ...optionStyle,
                                    ':hover': { ...commonStyles },
                                };
                            },
                            dropdownIndicator(base, props) {
                                return {
                                    ...base,
                                    color: '#8038a6',
                                    transition: 'all .2s ease',
                                    transform: props.selectProps.menuIsOpen
                                        ? 'rotate(180deg)'
                                        : '',
                                };
                            },
                            menu(base, props) {
                                return {
                                    ...base,
                                    borderRadius: '10px',
                                };
                            },
                            menuList(base, props) {
                                return {
                                    ...base,
                                    padding: '0px',
                                    borderRadius: '10px',
                                };
                            },
                            clearIndicator(base) {
                                return {
                                    ...base,
                                    padding: '0px',
                                };
                            },
                        }}
                    />
                )}
            />
        );
    }
    return (
        <Select
            options={options}
            isSearchable={false}
            isClearable={false}
            hideSelectedOptions={false}
            placeholder={placeholder}
            {...props}
            components={{
                IndicatorSeparator: null,
                ...props.components,
            }}
            styles={{
                control(base) {
                    return {
                        ...base,
                        borderRadius: '10px',
                        borderColor: isInvalid ? '#dc3545' : '#8038A6',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        ':hover': {
                            borderColor: isInvalid ? '#dc3545' : '#8038A6',
                        },
                    };
                },
                singleValue(base) {
                    return {
                        ...base,
                        color: '#8038a6',
                        fontWeight: '600',
                    };
                },
                option(base, props) {
                    const commonStyles: CSSObjectWithLabel = {
                        backgroundColor: '#e9ecef',
                        color: '#8038a6',
                        fontWeight: '600',
                    };

                    const optionStyle: CSSObjectWithLabel = props.isSelected
                        ? { ...commonStyles }
                        : {
                              backgroundColor: 'white',
                              color: '#858688',
                          };

                    return {
                        ...base,
                        ...optionStyle,
                        ':hover': { ...commonStyles },
                    };
                },
                dropdownIndicator(base, props) {
                    return {
                        ...base,
                        color: '#8038a6',
                        transition: 'all .2s ease',
                        transform: props.selectProps.menuIsOpen
                            ? 'rotate(180deg)'
                            : '',
                    };
                },
                menu(base, props) {
                    return {
                        ...base,
                        borderRadius: '10px',
                    };
                },
                menuList(base, props) {
                    return {
                        ...base,
                        padding: '0px',
                        borderRadius: '10px',
                    };
                },
                ...props.styles,
            }}
        />
    );
};
