import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className="w-full flex flex-col gap-y-1 mt-[50px] justify-center items-center">
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home