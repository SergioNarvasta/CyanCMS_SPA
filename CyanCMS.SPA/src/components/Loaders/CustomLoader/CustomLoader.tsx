export const CustomLoader = ({ message }: { message: React.ReactNode }) => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="mb-3 position-relative">
                <div className="main-loader translate-middle"></div>
            </div>

            <p className="mt-4 fs-4 fw-semibold text-center">{message}</p>
        </div>
    );
};
