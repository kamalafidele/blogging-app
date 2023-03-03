import { Navigate, Route, Routes } from "react-router-dom"
import BlogDetails from "./components/BlogDetails"
import NavBar from "./components/NavBar"
import Blogs from "./pages/Blogs"


function App() {
  return (
    <div className="bg-gray-900 h-screen w-screen flex items-center justify-center overflow-x-hidden py-7">
      <div className="flex items-center justify-start flex-col gap-6 h-full w-10/12 m-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div >
    </div>
  )
}

export default App
