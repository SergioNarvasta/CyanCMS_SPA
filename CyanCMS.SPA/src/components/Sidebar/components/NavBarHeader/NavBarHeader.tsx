import './NavBarHeader.scss';

import { useContext } from 'react';
import JuntozLogo from '../../../../assets/juntoz/juntoz.logo.white.svg';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { LocalStorage, type Store } from '../../../../models';
import { setCurrentStore } from '../../../../redux/states/merchantData.state';
import { Dropdown } from '../../../Dropdown';
import { Image } from '../../../Images';
import { HoveredContext } from '../../context/HoveredContext';
import type { IHoveredContext } from '../../context/models/IHoveredContext';

export const NavBarHeader = () => {
    const dispatch = useAppDispatch();

    const { merchantName, stores, currentStore } = useAppSelector(
        (state) => state.merchantData,
    );

    const { isHovered } = useContext<IHoveredContext>(HoveredContext);

    const handleDropdown = (id: number) => {
        const selectedStore: Store =
            stores.find((opt) => opt.id === id) ?? stores[0];
        dispatch(
            setCurrentStore(stores.find((opt) => opt.id === id) ?? stores[0]),
        );
        localStorage.setItem(LocalStorage.STORE_ID, id.toString());
        localStorage.setItem(
            LocalStorage.COUNTRY_ID,
            selectedStore.countryId.toString(),
        );
    };

    return (
        <div
            className="sideBar__Header text-center flex-shrink-0"
            style={{ fontSize: '1.625rem' }}
        >
            {isHovered ? (
                <div className="header__title mb-3">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <span className="header__merchant">Merchant</span>
                        <span className="header__central">Central</span>
                    </div>
                    <div className="d-flex justify-content-end header__subtitle">
                        <span className="header__central">por&nbsp;</span>
                        <span className="header__merchant">juntoz</span>
                    </div>
                </div>
            ) : (
                <div className="header__title mb-3 pt-1">MC</div>
            )}

            <div className="header__userData d-flex gap-3 text-white mb-3">
                <div className="image__container">
                    <Image
                        src={currentStore?.logo ?? JuntozLogo}
                        alt="user image"
                        className="image_styles"
                        style={{
                            width: '50px',
                            height: '50px',
                        }}
                        onErrorImage={JuntozLogo}
                    />
                </div>
                {isHovered && (
                    <div
                        className={`user__information align-items-start justify-content-center w-100 ${
                            isHovered ? 'hovered' : ''
                        }`}
                    >
                        <span className="fullName">{merchantName}</span>
                        {stores.length > 1 ? (
                            <Dropdown
                                isDark
                                options={stores.map(({ id, name }) => ({
                                    name,
                                    value: id,
                                }))}
                                handleDropdown={handleDropdown}
                                currentOption={{
                                    name: currentStore?.name ?? '',
                                    value: currentStore?.id ?? 0,
                                }}
                                className="d-flex w-100"
                            />
                        ) : (
                            <span className="storeName">
                                {currentStore?.name}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
