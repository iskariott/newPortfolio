import { PAGINATION_VARIANT } from '@/shared/lib/constants';
import st from './Pagination.module.scss';

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

export default function Pagination({
    totalPages,
    currentPage,
    setPage,
    style = PAGINATION_VARIANT.NUMBER,
}) {
    return (
        <>
            {totalPages > 1 && (
                <div className={`${getPaginationStyle(style)}`}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={currentPage === i ? st.active : ''}>
                            {style === PAGINATION_VARIANT.NUMBER && i + 1}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}
