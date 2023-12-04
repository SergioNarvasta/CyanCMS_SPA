import { MdError } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import { useApiServiceUrl } from '../../hooks';
import { EndpointsName } from '../../models';
import { useConfirmUserOnboardginQuery } from '../../services';
import { CustomLoader } from '../Loaders/CustomLoader';

export const ConfirmationEmail = () => {
    const { token } = useParams<'token'>();
    const { baseUrl } = useApiServiceUrl(EndpointsName.MERCHANT_API);

    const { isLoading, isSuccess, isError, error } =
        useConfirmUserOnboardginQuery(
            {
                baseUrl,
                validationToken: token ?? '',
            },
            { skip: token === '' },
        );

    if (isLoading) {
        <CustomLoader
            message={
                <>
                    <span>Verificando enlace.</span>
                    <br />
                    <span>Por favor, no cierres la página.</span>
                </>
            }
        />;
    }

    if (isError) {
        return (
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="d-flex justify-content-center text-danger">
                    <MdError size={50} />
                </div>
                <p className="fs-4 fw-semibold text-center">
                    {(error as any)?.data?.message}
                </p>
            </div>
        );
    }

    if (isSuccess) {
        localStorage.clear();
        window.location.replace(
            import.meta.env.VITE_MERCHANT_CENTRAL_V1_URL_LOGIN,
        );
        return <></>;
    }

    return (
        <CustomLoader
            message={
                <>
                    <span>Verificando enlace.</span>
                    <br />
                    <span>Por favor, no cierres la página.</span>
                </>
            }
        />
    );
};
