import { Title } from '../../Title';
import './MetricsHeader.scss';

export const MetricsHeader = () => {
    return (
        <div className="metrics-header d-flex flex-column gap-2">
            <Title title="Métricas" />
            <p className="metrics-paraph">
                Las métricas se utilizan para impulsar mejoras. Por esta razón,
                hemos implementado esta nueva funcionalidad para que puedas
                evaluar el rendimiento de tu tienda en Juntoz a lo largo del
                tiempo.
            </p>
        </div>
    );
};
