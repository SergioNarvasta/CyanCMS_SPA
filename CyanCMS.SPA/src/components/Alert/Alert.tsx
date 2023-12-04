import { useState } from 'react';
import AlertBootstrap from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Alert.scss';

export const Alert = ({ title }: { title: string }): JSX.Element => {
    const [showAlert, setShowAlert] = useState<boolean>(true);
    if (!showAlert) return <Row />;
    return (
        <Row className="mb-0">
            <Col>
                <AlertBootstrap variant="custom" className="mb-0">
                    {title}
                    <CloseButton
                        variant="white"
                        onClick={() => {
                            setShowAlert(false);
                        }}
                    />
                </AlertBootstrap>
            </Col>
        </Row>
    );
};
