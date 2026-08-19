import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const Home = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center overflow-auto bg-Neutral font-sans relative">
            <div className="pt-18">
            <Blogs/>
            </div>
            <Pagination/>
        </div>
    );
}

export default Home;