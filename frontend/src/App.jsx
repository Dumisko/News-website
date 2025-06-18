import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import NewsPage from "./pages/NewsPage"
import CategoryPage from "./pages/CategoryPage"



function App() {
  return (
    <>
<Navbar/>
<div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/category/:type" element={<CategoryPage />} />
        </Routes>
      </div>
<Footer />    
    </>
  )
}

export default App
