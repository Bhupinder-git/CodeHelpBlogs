import { Children, useContext } from "react";
import Spinner from "./Spinner.jsx";
import Blog from "./Blog.jsx";
import { AppContext } from "../context/AppContext.jsx";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="flex flex-col h-full w-11/12 max-w-300 justify-center items-center m-3 gap-y-4">
      {loading ? (
        <Spinner />
      ) : posts.length == 0 ? (
        <div>
          <h1>No Posts Found</h1>
        </div>
      ) : (
        posts.map((post) => (
          <div className="w-full" key={post.id}>
            <Blog {...post} />
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
