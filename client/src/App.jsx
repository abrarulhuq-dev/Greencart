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
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'
import Addaddress from './pages/Addaddress'
import Myorder from './pages/Myorder'
import SellerLogin from './seller/SellerLogin'
import Sellerlayout from './seller/page/Sellerlayout'
import Addproduct from './seller/page/Addproduct'
import Productlist from './seller/page/Productlist'
import Orders from './seller/page/Orders'

const App = () => {

  const isSellerPath = useLocation().pathname.includes('seller')
  const { showuserlogin, Isseller } = useAppContext()

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>

      {isSellerPath ? null : <Navbar />}
      {showuserlogin ? <Login /> : null}

      <Toaster />
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Allproduct />} />
          <Route path='/products/:category' element={<Productcategory />} />
          <Route path='/products/:category/:id' element={<Productdetails />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/add-address' element={<Addaddress />} />
          <Route path='/my-order' element={<Myorder />} />
          route
          <Route path='/seller' element={Isseller ? <Sellerlayout/> :<SellerLogin />} > 

            <Route index element={Isseller ? <Addproduct/> : null} />
            <Route path='product-list' element={<Productlist/>}/>
            <Route path='orders' element={<Orders/>}/>
            
            
          </Route>
          
        </Routes>
      </div>

      {!isSellerPath && <Footer />}

    </div>
  )
}

export default App