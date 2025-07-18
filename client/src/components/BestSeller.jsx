import React, { useContext } from 'react'
import Productcard from './Productcard'
import { useAppContext } from '../context/Appcontext'

const BestSeller = () => {

    const { products } = useAppContext()

    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
            <div className=' grid grid-cols-2 gap-3 md:gap-6 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
                {products.filter((product) => product.inStock).slice(0, 5).map((product, index) => (

                    <Productcard key={index} product={product} />

                ))}
            </div>
        </div>
    )
}

export default BestSeller