import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const { page, setPage, totalPages } = useContext(AppContext);
  const [, setSearchParams] = useSearchParams();

  function nextHandler() {
    setSearchParams(`?page=${page + 1}`);
    setPage((prev) => prev + 1);
  }

  function prevHandler() {
    setSearchParams(`?page=${page - 1}`);
    setPage((prev) => prev - 1);
  }
  return (
    <div className="mt-2 flex w-full justify-center border-t border-outline-variant font-label">
      <div className="flex w-11/12 max-w-300 flex-col gap-y-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-y-0">
        {/* Prev - Next Button */}
        <div className="flex w-full gap-x-3 sm:w-auto">
          {page > 1 && (
            <button
              className="flex min-h-10 flex-1 cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-slate-100 px-3 py-1.5 text-sm transition-all duration-600 hover:scale-103 hover:bg-slate-200 active:bg-slate-300 sm:flex-none sm:text-base dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600"
              onClick={prevHandler}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="flex min-h-10 flex-1 cursor-pointer items-center justify-center rounded-md border border-blue-700 bg-blue-600 px-3 py-1.5 text-sm text-white transition-all duration-600 hover:scale-103 hover:bg-blue-700 active:bg-blue-800 sm:flex-none sm:text-base dark:border-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400 dark:active:bg-blue-300"
              onClick={nextHandler}
            >
              Next
            </button>
          )}
        </div>

        <div className="text-center text-sm sm:text-right sm:text-base">
          <p>
            Page <span>{page}</span> of <span>{totalPages}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
