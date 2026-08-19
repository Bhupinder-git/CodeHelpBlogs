import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const { page, setPage, totalPages, fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();

  function nextHandler() {
    setSearchParams(`?page=${page + 1}`);
    setPage((prev) => prev + 1);
  }

  function prevHandler() {
    setSearchParams(`?page=${page - 1}`);
    setPage((prev) => prev - 1);
  }
  return (
    <div className="flex justify-center w-full border-t border-outline-variant font-label mt-2">
      <div className="flex justify-between w-11/12 max-w-300 p-4">
        {/* Prev - Next Button */}
        <div className="flex gap-x-3">
          {page > 1 && (
            <button
              className="flex cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-slate-100 px-3 py-1.5 transition-all 600ms hover:scale-103 hover:bg-slate-200 active:bg-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600"
              onClick={prevHandler}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="flex cursor-pointer items-center justify-center rounded-md border border-blue-700 bg-blue-600 px-3 py-1.5 text-white transition-all 600ms hover:scale-103 hover:bg-blue-700 active:bg-blue-800 dark:border-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400 dark:active:bg-blue-300"
              onClick={nextHandler}
            >
              Next
            </button>
          )}
        </div>

        <div>
          <p>
            Page <span>{page}</span> of <span>{totalPages}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
