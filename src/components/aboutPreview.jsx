import React from 'react'
import { useNavigate } from 'react-router-dom'
import Title from './title.jsx'

const AboutPreview = () => {
  const navigate = useNavigate()

  return (
    <div className='py-16 px-6 bg-gray-50'>
      <div className='max-w-3xl mx-auto text-center flex flex-col items-center gap-6'>

        <div className='text-3xl'>
          <Title text1={'OUR'} text2={'STORY'} />
        </div>

        <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
          Discover a curated collection of premium, luxurious garments, carefully chosen to reflect
          timeless elegance and exceptional quality. Each piece is handpicked personally to provide
          our customers with exclusive and sophisticated fashion choices — bringing you an elevated
          online shopping experience.
        </p>

        <button
          onClick={() => navigate('/about')}
          className='mt-2 px-8 py-2.5 border border-gray-800 text-gray-800 text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-all rounded'
        >
          READ MORE
        </button>

      </div>
    </div>
  )
}

export default AboutPreview