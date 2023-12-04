import DefaultImage from '../../assets/no-image.png';
import type { ImageProps } from './models';

export const Image = ({
    src,
    alt,
    style,
    className,
    onErrorImage,
}: ImageProps): JSX.Element => {
    const defaultSize = '20px';
    return (
        <img
            src={src || DefaultImage}
            alt={alt}
            style={{
                width: style?.width ?? defaultSize,
                height: style?.height ?? defaultSize,
                ...style,
            }}
            className={className}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = onErrorImage ?? DefaultImage;
            }}
            loading="lazy"
        />
    );
};
