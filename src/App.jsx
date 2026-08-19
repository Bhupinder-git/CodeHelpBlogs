import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import MainHeader from "./components/MainHeader.jsx";
import Home from "./pages/Home.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import TagPage from "./pages/TagPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    // console.log(pathParts);

    const route = pathParts[0];
    const param = pathParts[1];

    // console.log(route, param);
    if (route === "blogs" && param) {
      fetchBlogPosts("blogs", param);
      return;
    }

    if (route === "tags" && param) {
      fetchBlogPosts("tags", param);
      return;
    }

    if (route === "category" && param) {
      fetchBlogPosts("category", param);
      return;
    }

    fetchBlogPosts("", "");
  }, [location.pathname, location.search]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start bg-Neutral text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="blogs/:id" element={<BlogPage />} />
          <Route path="tags/:id" element={<TagPage />} />
          <Route path="category/:id" element={<CategoryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
