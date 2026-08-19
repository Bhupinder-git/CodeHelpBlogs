import { createContext, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

// 1.Create Context and export it
export const AppContext = createContext();

// 2.Create Context Provider and export it
export default function AppContextProvider({ children }) {

  const [searchParams, setSearchParams] = useSearchParams();

  // creating states needed
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});

  const baseUrl = `https://codehelp-apis.vercel.app/api/get-blogs`;

  // function to fetch posts
  const fetchBlogPosts = async (id = "", val = "") => {
      let finalUrl = baseUrl;

      switch (id) {
        case "blogs":
          finalUrl = `${baseUrl.slice(0, -1)}?blogId=${val}`;
          break;
        case "category": {
          const page = searchParams.get('page') ?? 1;
          const category = val.split("-").join("%20");
          finalUrl = `${baseUrl}?page=${page}&category=${category}`;
          break;
        }
        case "tags": {
          const page = searchParams.get('page') ?? 1;
          const tag = val.split("-").join("%20");
          finalUrl = `${baseUrl}?page=${page}&tag=${tag}`;
          break;
        }
        default:
          const page = searchParams.get('page') ?? 1;
          finalUrl = `${baseUrl}?page=${page}`;
          break;
      }

      setLoading(true);
      try {
        // console.log(`Calling : ${finalUrl}`);
        const response = await fetch(finalUrl);
        const data = await response.json();
        // console.log(data);
        if(id === 'blogs'){
          // console.log(data.relatedBlogs);
          // console.log(data.blog);
          setPosts(data.relatedBlogs || []);
          setBlog(data.blog || {});
        }else{
          setPosts(data.posts || []);
        }
        setTotalPages(data.totalPages || 0);
        setPage(data.page || 1);
      } catch (err) {
        console.log(`Error Occurred While Fetching Posts : ${err}`);
        setPage(1);
        setTotalPages(0);
        setPosts([]);
      }
      setLoading(false);
  }

  const value = {
    page,
    setPage,
    totalPages,
    setTotalPages,
    posts,
    setTotalPages,
    posts,
    setPosts,
    blog,
    setBlog,
    loading,
    setLoading,
    fetchBlogPosts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
