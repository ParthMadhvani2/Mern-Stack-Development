import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {
    //consume
    const {posts,loading} = useContext(AppContext);

  return (
    <div>
        {
            loading ? (<Spinner/>) : (
                posts.length === 0 ? (
                    <div>
                        <p>No Post Found</p>
                    </div>
                ) : 
                (
                    posts.map((post) => (
                        <div key={post.id}>
                            <p className='font-bold'>{post.title}</p>
                            <p>
                                by <span>{posts.author}</span> on <span>{posts.category}</span>
                            </p>
                            <p>
                                Posted on {posts.date}
                            </p>
                            <p>{posts.content}</p>
                            <div>
                                {posts.tags.map((tag,index) => {
                                    return <span key={index}>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    ))
                )
            )
        }
    </div>
  )
}

export default Blogs