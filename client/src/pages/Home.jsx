import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import BestSeller from '../components/bestSeller'
import BottomBanner from '../components/BottomBanner'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mt-10'>
        <Banner/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
        <Newsletter/>
    </div>
  )
}

export default Home