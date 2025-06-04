import { Pagination } from '@/shared/pagination';
import st from './Navigation.module.scss';
import { PAGINATION_VARIANT } from '@/shared/lib/constants';
import StButton, { HOVER_EFFECT } from '@/shared/button';

export default function Navigation({ totalPages, prevSlide, nextSlide, goToSlide, currentSlide }) {
    return (
        <>
            <StButton
                className={`${st.navButton} ${st.prev}`}
                onClick={prevSlide}
                hoverEffect={HOVER_EFFECT.OPACITY}
                aria-label="Previous slide">
                ←
            </StButton>
            <StButton
                className={`${st.navButton} ${st.next}`}
                onClick={nextSlide}
                hoverEffect={HOVER_EFFECT.OPACITY}
                aria-label="Next slide">
                →
            </StButton>

            <Pagination
                totalPages={totalPages}
                setPage={goToSlide}
                currentPage={currentSlide}
                style={PAGINATION_VARIANT.DOT}
            />
        </>
    );
}
