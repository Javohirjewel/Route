import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../pages/Home/home"
import About from "../../pages/About/about"
import Blog from "../../pages/Blog/blog"
import PageLayout from "../layout/PageLayout";
import NotFound from "../notFound/notFound";
import './App.css'

function App() {
  return (
    <>
  
      <Routes>
        <Route element={<Navigate to={'/main/home'} />} path={"/"} ></Route>
        <Route element={<PageLayout/>}  path="main">
          <Route element={<Home/>} path="home"></Route>
          <Route element={<About/>} path="about"></Route>
          <Route element={<Blog/>} path="blog"></Route>
        </Route>
        <Route element={<NotFound/>} path="*"></Route>
      </Routes>
  
      
    </>
  )
}

export default App