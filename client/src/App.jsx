import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/Appcontext'
import Login from './components/Login'
import Allproduct from './pages/Allproduct'
import Productcategory from './pages/Productcategory'

const App = () => {

  const isSellerPath = useLocation().pathname.includes('seller')
  const { showuserlogin } = useAppContext()

  return (
    <div>

      {isSellerPath ? null : <Navbar />}
      {showuserlogin ? <Login /> : null}

      <Toaster />
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Allproduct />} />
          <Route path='/products/:category' element={<Productcategory />} />

        </Routes>
      </div>

      {!isSellerPath && <Footer />}

    </div>
  )
}

export default App