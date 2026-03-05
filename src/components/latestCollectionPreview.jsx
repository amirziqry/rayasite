import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { shopContext } from '../context/shopContext.jsx'
import Title from './title.jsx'

const LatestCollectionPreview = () => {
  const { products, currency } = useContext(shopContext)
  const navigate = useNavigate()

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Handcrafted with care — explore our newest arrivals.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-6'>
        {products.slice(0, 10).map((item, index) => (
          <div
  key={index}
  className='text-gray-700 cursor-pointer w-40 sm:w-48'
  onClick={() => navigate(`/collection/${item._id}`)}
>
            <div className='overflow-hidden rounded-lg'>
              <img
                className='w-full hover:scale-110 transition ease-in-out duration-300 object-cover'
                src={item.image[0]}
                alt={item.name}
              />
            </div>
            <p className='pt-3 pb-1 text-sm'>{item.name}</p>
            <p className='text-sm font-medium'>{currency}{item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestCollectionPreview