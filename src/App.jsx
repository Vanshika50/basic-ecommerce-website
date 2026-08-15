import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ScrollToTop from './components/ScrollToTop'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from './pages/Cart'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <ScrollToTop/>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>

      </Routes>
      <Footer />
    </div>
  )
}

export default App