import { PAGINATION_VARIANT } from '@/shared/lib/constants';
import st from './Pagination.module.scss';
import StButton, { HOVER_EFFECT } from '@/shared/button';

function getPaginationStyle(style) {
    switch (style) {
        case PAGINATION_VARIANT.DOT:
            return st.dot;
        case PAGINATION_VARIANT.NUMBER:
            return st.number;
        default:
            throw new Error('pagination style incorrect');
    }
}

export default function Pagination({ totalPages, currentPage, setPage, style }) {
    return (
        <>
            {totalPages > 1 && (
                <div className={getPaginationStyle(style)}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <StButton
                            key={i}
                            onClick={() => setPage(i)}
                            isActive={currentPage === i}
                            hoverEffect={HOVER_EFFECT.SCALE}>
                            {style === PAGINATION_VARIANT.NUMBER && i + 1}
                        </StButton>
                    ))}
                </div>
            )}
        </>
    );
}
