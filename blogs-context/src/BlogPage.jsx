import React, { useState } from 'react'
import {useNavigation} from "react-router-dom"
import {useLocation} from "react-router-dom"
import { AppContext } from './context/AppContext';
import { baseUrl } from './baseUrl';
import { useContext } from 'react';

const BlogPage = () => {
    const [blog , setBlog] = useState(null);
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigation();
    const {setloading, loading} = useContext(AppContext)

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setloading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){

        }
    }
  return (
    <div></div>
  )
}

export default BlogPage