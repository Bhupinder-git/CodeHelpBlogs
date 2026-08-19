import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import BlogsDetail from "../components/BlogsDetail";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    return (
        <div className="flex flex-col h-full w-11/12 max-w-300 justify-center items-center m-3 gap-y-3 pt-18 -mb-10">
            {/* back - heading */}
            <div className="flex w-full justify-between items-start border-b border-slate-700 font-label p-4">
                <button 
                    className="flex items-center justify-center gap-x-2 px-3 py-1.5 border border-slate-900 rounded-md hover:scale-103 transition-all 600ms cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    <span><IoIosArrowRoundBack/></span>
                    <span>Back</span>
                </button>
                <h2 className="font-body font-semibold text-on-surface text-3xl cursor-pointer">Blogs on <span className="font-label text-blue-800">{id}</span></h2>
            </div>

            {/* Blogs */}
            <BlogsDetail/>

            <Pagination/>
        </div>
    );
}

export default CategoryPage;