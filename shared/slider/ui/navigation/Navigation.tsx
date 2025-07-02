import { Pagination } from '@/shared/pagination';
import st from './Navigation.module.scss';
import StButton from '@/shared/button';

export default function Navigation({ totalPages, prevSlide, nextSlide, goToSlide, currentSlide }) {
    return (
        <>
            <StButton
                className={`${st.navButton} ${st.prev}`}
                onClick={prevSlide}
                hoverEffect={'opacity'}
                aria-label="Previous slide">
                ←
            </StButton>
            <StButton
                className={`${st.navButton} ${st.next}`}
                onClick={nextSlide}
                hoverEffect={'opacity'}
                aria-label="Next slide">
                →
            </StButton>

            <Pagination
                totalPages={totalPages}
                setPage={goToSlide}
                currentPage={currentSlide}
                pagination_variant={'dot'}
            />
        </>
    );
}
