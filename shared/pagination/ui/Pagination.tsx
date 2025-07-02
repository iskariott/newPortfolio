import { PAGINATION_VARIANT } from '@/shared/lib/constants';
import st from './Pagination.module.scss';
import StButton from '@/shared/button';
import { TSetState } from '@/shared/types/common.types';

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    setPage: TSetState<number>;
    pagination_variant: PAGINATION_VARIANT;
};

function getPaginationStyle(pagination_variant: PAGINATION_VARIANT): string {
    switch (pagination_variant) {
        case 'dot':
            return st.dot;
        case 'number':
            return st.number;
        default:
            throw new Error('pagination variant incorrect');
    }
}

export default function Pagination({
    totalPages,
    currentPage,
    setPage,
    pagination_variant,
}: PaginationProps) {
    return (
        <>
            {totalPages > 1 && (
                <div className={getPaginationStyle(pagination_variant)}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <StButton
                            key={i}
                            onClick={() => setPage(i)}
                            isActive={currentPage === i}
                            hoverEffect={'scale'}>
                            {pagination_variant === 'number' && i + 1}
                        </StButton>
                    ))}
                </div>
            )}
        </>
    );
}
