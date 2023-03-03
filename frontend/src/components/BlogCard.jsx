import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({ blog }) {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="h-[250px] object-cover w-full rounded-t-lg" src={blog.poster_image} loading="lazy" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900">{blog.title.charAt(0).toUpperCase()
            + blog.title.slice(1)}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">{blog.content}</p>
        <Link to={`/blog/${blog._id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read more
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard