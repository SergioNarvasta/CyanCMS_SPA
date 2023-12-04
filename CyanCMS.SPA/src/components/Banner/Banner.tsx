import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Image } from '..';
import PersonBanner from '../../assets/dashboard/person_banner.webp';
import { useAppSelector } from '../../hooks';

import './Banner.scss';

export const Banner = (): JSX.Element => {
    const { currentStore } = useAppSelector((state) => state.merchantData);
    return (
        <Row
            className="banner__container d-flex justify-content-center align-middle p-3"
            style={{
                marginTop: '-1.5rem',
            }}
        >
            <Col xs="auto" className="d-none d-xl-block m-auto">
                <div style={{ backgroundColor: 'white', borderRadius: '50%' }}>
                    <Image
                        src={currentStore?.logo ?? ''}
                        alt="merchant_logo"
                        className="d-none d-lg-block"
                        style={{
                            width: 85,
                            height: 85,
                            borderRadius: '50%',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </Col>
            <Col>
                <div className="text-center">
                    <h3 className="fs-1 ">¡Bienvenido {currentStore?.name}!</h3>
                    <p className="fs-6">
                        Hemos rediseñado el Merchant Central para que puedas
                        aprovecharlo al 100% y tengas una mejor experiencia
                        dentro de Juntoz.
                    </p>
                </div>
            </Col>
            <Col xs="auto" md={2} className="d-none d-xl-block">
                <div className="banner__person-image">
                    <img
                        fetchpriority="high"
                        src={PersonBanner}
                        alt="banner-person"
                    />
                </div>
            </Col>
        </Row>
    );
};
