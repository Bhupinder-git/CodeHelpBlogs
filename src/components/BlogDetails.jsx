import { NavLink } from "react-router-dom";

const BlogDetails = ({ title, author, date, category, tags, content, id }) => {
  return (
    <div className="flex w-full min-w-0 justify-start gap-x-2 rounded-md border border-slate-300 bg-white p-2 shadow-md transition-all duration-600 hover:scale-103 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 md:gap-x-3 md:p-3">
      <div className="hidden shrink-0 basis-1/4 items-center justify-center rounded-md bg-slate-900 text-center font-headline text-lg font-semibold text-white dark:bg-slate-800 sm:flex md:basis-1/5 md:text-3xl">
        <NavLink
          className="text-center"
          to={`/category/${category.replaceAll(" ", "-")}`}
        >
          {category}
        </NavLink>
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-1 overflow-hidden font-body md:gap-2">
        {/* title - author - date */}
        <div className="min-w-0 max-w-full">
          <NavLink to={`/blogs/${id}`}>
            <h2 className="break-words font-headline text-base font-bold text-slate-900 dark:text-slate-100 md:text-xl">
              {title}
            </h2>
          </NavLink>
          <p className="break-words text-sm md:text-base">
            {" "}
            By
            <span className="italic"> {author} </span>
            On
            <NavLink to={`/category/${category.replaceAll(" ", "-")}`}>
              <span className="font-label text-xs font-semibold md:text-[15px]">
                {" "}
                {category}
              </span>
            </NavLink>
          </p>
          <p className="break-words text-sm md:text-base">
            Posted On <span>{date}</span>
          </p>
        </div>

        {/* content - tags */}
        <div className="flex min-w-0 flex-col gap-y-2 md:gap-y-3">
          <p className="break-words text-sm md:text-base">{content}</p>
          <div className="max-w-full break-words">
            {tags.map((tag, idx) => (
              <span
                className="font-label mx-1 text-sm text-blue-800 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200 md:mx-2 md:text-base"
                key={idx}
              >
                <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
                  #{tag}
                </NavLink>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
