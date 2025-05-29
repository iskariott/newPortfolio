import { Pagination } from '@/shared/pagination';
import st from './Navigation.module.scss';
import { PAGINATION_VARIANT } from '@/shared/lib/constants';

export default function Navigation({ totalPages, prevSlide, nextSlide, goToSlide, currentSlide }) {
    return (
        <>
            <button
                className={`${st.navButton} ${st.prev}`}
                onClick={prevSlide}
                aria-label="Previous slide">
                ←
            </button>
            <button
                className={`${st.navButton} ${st.next}`}
                onClick={nextSlide}
                aria-label="Next slide">
                →
            </button>

            <Pagination
                totalPages={totalPages}
                setPage={goToSlide}
                currentPage={currentSlide}
                style={PAGINATION_VARIANT.DOT}
            />
        </>
    );
}
