import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div className="min-h-screen w-11/12 max-w-300 min-w-0 flex flex-col items-center overflow-auto bg-Neutral font-sans relative m-3 gap-y-3 pt-18">
      <Blogs />
      <Pagination />
    </div>
  );
};

export default Home;
