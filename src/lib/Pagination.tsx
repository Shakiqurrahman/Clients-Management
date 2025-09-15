import React from "react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
            <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-black/80 text-white dark:bg-white/30 dark:text-white  rounded disabled:opacity-50"
            >
                Prev
            </button>

            <span className="text-gray-900 dark:text-white text-sm sm:text-base">
                Page <strong>{currentPage}</strong> of{" "}
                <strong>{totalPages}</strong>
            </span>

            <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-black/80 text-white dark:bg-white/30 dark:text-white rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
