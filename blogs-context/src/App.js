import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Route ,Routes, useSearchParams} from "react-router-dom";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // ?? this is used when to set by default
    const page = searchParams.get("page")?? 1;
    if(location.pathname.includes("tags")){
      // iska matlab tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Nmber(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/blog/:blogId" element = {<BlogPage/>}/>
      <Route path="/tags/:tag" element = {<TagPage/>}/>
      <Route path="/categories/:category" element = {<CategoryPage/>}/>
    </Routes>
  );
}
