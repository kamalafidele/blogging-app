import React, { useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddBlogModal = ({ open, closeModal }) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    poster_image: {},
    publisher_name: "",
  });
  const [creating, setCreating] = useState(false);

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setCreating(true);
      let newBlog = await axios.post(`${API_URL}/api/v1/blogs`, post);
      if (newBlog) {
        setCreating(false);
        notify("New blog created successfully!")
        setTimeout(() => {
          closeModal()
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setCreating(false)
      notify(error.message, true)
    }
  };
  function handleFileUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setPost({ ...post, poster_image: reader.result })
    };

    reader.readAsText(file);
  }

  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal bg-white p-3 w-full md:w-[30rem] border border-gray-200 rounded-lg shadow">
          <a className="px-4 close cursor-pointer" onClick={closeModal}>
            &times;
          </a>
          <form className="px-4">
            <div class="mt-3 mb-6">
              <label
                for="publisher_name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Publisher
              </label>
              <input
                type="text"
                onChange={(e) => setPost({ ...post, publisher_name: e.target.value })}
                id="publisher_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Title
              </label>
              <input
                type="text"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="content"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Content
              </label>
              <textarea
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                id="content"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                class="block mb-2 text-sm font-medium text-gray-900"
                for="banner"
              >
                Banner
              </label>
              <input
                onChange={handleFileUpload}
                class="w-full text-sm text-gray-900 border border-gray-300 p-3 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                id="banner"
                name="banner"
                type="file"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {creating ? 'Finishing up....' : 'Finish up'}
            </button>
          </form>
        </div>
      </Popup>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default AddBlogModal;
