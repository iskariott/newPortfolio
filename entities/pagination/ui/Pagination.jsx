import st from './Pagination.module.scss';

export default function Pagination({ totalPages, currentPage, setPage }) {
    return (
        <>
            {totalPages > 1 && (
                <div className={st.pagination}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={currentPage === i + 1 ? st.active : ''}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}
