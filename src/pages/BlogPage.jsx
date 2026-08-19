import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { IoIosArrowRoundBack } from "react-icons/io";
import BlogsDetail from "../components/BlogsDetail";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {blog} = useContext(AppContext);
    console.log("Inside Blog Page : ");
    console.log(blog);

    return (
        <div className="flex flex-col h-full w-11/12 max-w-300 justify-center items-center m-3 gap-y-3 pt-18 -mb-10">
            {/* back - heading */}
            <div className="flex flex-col gap-y-5 w-full items-start border-b border-slate-700 font-label p-4">
                <button 
                    className="flex items-center justify-center gap-x-2 px-3 py-1.5 border border-slate-900 rounded-md hover:scale-103 transition-all 600ms cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    <span><IoIosArrowRoundBack/></span>
                    <span>Back</span>
                </button>

            {
                (Object.keys(blog).length === 0)
                ?
                (<h2>No Blog Found</h2>)
                :
                <BlogDetails {...blog}/>
            }

            <h2 className="font-headline font-semibold text-on-surface text-3xl cursor-pointer text-blue-800 pt-2">Related Blogs : </h2>
            </div>

            {/* Blogs */}
            <BlogsDetail/>
        </div>
    );
}

export default BlogPage;