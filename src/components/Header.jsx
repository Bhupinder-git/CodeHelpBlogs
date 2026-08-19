import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const navigate = useNavigate();
  const { page, setPage } = useContext(AppContext);

  function clickHandler() {
    navigate("/");
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex justify-between items-center w-11/12 max-w-300 px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div
            className="cursor-pointer text-2xl font-headline-md font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100"
            onClick={clickHandler}
          >
            CodeHelp Blogs
          </div>

          {/* NavLinks */}
          <nav className="hidden lg:flex items-center gap-6 font-label text-sm">
            <NavLink
              className={({ isActive }) =>
                `rounded-md border border-slate-900 px-4 py-0.5 text-white transition-all 200ms dark:border-slate-600 ${
                  isActive
                    ? "bg-slate-950 dark:bg-slate-100 dark:text-slate-950"
                    : "bg-slate-600 hover:bg-slate-950 dark:bg-slate-700 dark:hover:bg-slate-600"
                }`
              }
              to="/category/AI"
            >
              AI
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md border border-slate-900 px-4 py-0.5 text-white transition-all 200ms dark:border-slate-600 ${
                  isActive
                    ? "bg-slate-950 dark:bg-slate-100 dark:text-slate-950"
                    : "bg-slate-600 hover:bg-slate-950 dark:bg-slate-700 dark:hover:bg-slate-600"
                }`
              }
              to="/category/Software-Engineering"
            >
              Software Engineering
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `rounded-md border border-slate-900 px-4 py-0.5 text-white transition-all 200ms dark:border-slate-600 ${
                  isActive
                    ? "bg-slate-950 dark:bg-slate-100 dark:text-slate-950"
                    : "bg-slate-600 hover:bg-slate-950 dark:bg-slate-700 dark:hover:bg-slate-600"
                }`
              }
              to="/category/Web-Development"
            >
              Web Development
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
