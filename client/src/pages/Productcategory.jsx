import React from 'react'
import { useAppContext } from '../context/Appcontext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/greencart_assets/assets'
import Productcard from '../components/Productcard'
import Categories from '../components/Categories'

const Productcategory = () => {

    const { products } = useAppContext()
    const { category } = useParams()

    const searchcategory = categories.find((item) => item.path.toLowerCase() === category)


    const filterproducts = products.filter((product) => product.category.toLowerCase() === category)


    return (



        <div className='mt-16'>
           
                          
            {searchcategory && (
                <div className='flex flex-col items-end w-max mt-16' >
                    <p className='text-2xl font-medium'>{searchcategory.text.toLowerCase()}</p>
                    <div className='w-16 h-0.5 bg-primary rounded-full'></div>
                </div>
            )}
            {filterproducts.length > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-6 mt-6'>
                    {filterproducts.map((product) => (
                        <Productcard key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center h-[60vh]'>
                    <p className='text-2xl font-medium text-primary'>No products found in this Category.</p>
                </div>
            )}
        </div>
    )
}

export default Productcategory