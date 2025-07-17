import React from 'react'
import { assets } from '../assets/greencart_assets/assets'

const Banner = () => {
    return (
        <div className='relative'>
            <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block' />
            <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden' />
            <div>
                <h1>Freshness You can Trust, Savings you Will Love! </h1>
            </div>
            <div>
                <Link>
                    Shop now 
                    <img className=' md:hidden transition group-focus: translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
                </Link>
            </div>
        </div>
    )
}

export default Banner