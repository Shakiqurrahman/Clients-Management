type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) => {
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-5 py-1.5   font-semibold bg-white/30 text-white  rounded disabled:opacity-50 text-sm cursor-pointer disabled:cursor-default"
            >
                Prev
            </button>

            <span className="text-white text-sm">
                Page <strong>{currentPage}</strong> of{" "}
                <strong>{totalPages}</strong>
            </span>

            <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-5 py-1.5 bg-blue-500/15 text-blue-500 font-semibold  rounded disabled:opacity-50 text-sm cursor-pointer disabled:cursor-default"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
