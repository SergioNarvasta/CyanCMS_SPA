import MultiCarousel, {
    type ResponsiveType,
    type CarouselProps,
} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Carousel = ({
    children,
    ...rest
}: Omit<CarouselProps, 'responsive'>) => {
    const responsive: ResponsiveType = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    };
    return (
        <MultiCarousel
            autoPlay={false}
            infinite
            responsive={responsive}
            {...rest}
        >
            {children}
        </MultiCarousel>
    );
};
