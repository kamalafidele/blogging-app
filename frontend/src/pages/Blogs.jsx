import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import AddBlogModal from '../components/AddBlogModal'
import { API_URL } from "../utils/constants";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let getBlogs = async () => {
      try {
        let blogs = await axios.get(`${API_URL}/api/v1/blogs`);
        setBlogs(blogs.data.blogs)
      } catch (error) {
        console.log(error)
      }
    }
    getBlogs();
  }, [])
  return (
    <div className="relative">
      <button onClick={() => setShowModal(true)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="button">
        Create Blog
      </button>
      <AddBlogModal open={showModal} closeModal={() => setShowModal(false)} />
      <div className="flex items-center justify-start gap-10 flex-wrap my-3">
        {blogs.length ? blogs.map((blog) => (
          <BlogCard blog={blog} />
        )) : (
          <p className='text-white'>Hold on...</p>
        )}
      </div>
    </div>
  )
}

export default Blogs