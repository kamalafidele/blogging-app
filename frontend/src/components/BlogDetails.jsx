import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../utils/constants';

function BlogDetails() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let getBlog = async () => {
      try {
        let blog = await axios.get(`${API_URL}/api/v1/blogs/${id}`);
        setBlog(blog.data.blog)
      } catch (error) {
        console.log(error)
      }
    }
    getBlog();
  }, [])
  return (
    <div>
      {blog.title ? (
        <div class="flex flex-col items-start border rounded-lg shadow md:flex-row h-[90vh] md:max-w-3xl md:h-96 bg-gray-100">
          <img class="object-cover w-full rounded-t-lg h-full md:w-6/12 md:rounded-none md:rounded-l-lg" loading="lazy" src={blog.poster_image} alt="" />
          <div class="flex flex-col justify-start gap-3 p-4 leading-normal md:overflow-hidden overflow-y-scroll h-auto">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{blog.title.charAt(0).toUpperCase()
              + blog.title.slice(1)}</h5>
            <p class="mb-3 font-normal text-gray-700">{blog.content}</p>
            <div className='flex gap-3 items-start justify-start'>
              <h5 class="mb-2 font-bold tracking-tight text-gray-900">Publisher:</h5>
              <h5>{blog.publisher_name}</h5>
            </div>
          </div>
        </div>
      ) : (
        <p>Hold on...</p>
      )}
    </div>
  )
}

export default BlogDetails