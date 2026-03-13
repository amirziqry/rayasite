import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => { // Note: Components should start with a Capital letter
  return (
    /* The main wrapper starts here */
    <div className='flex flex-col sm:flex-row border border-gray-400'> 
      
      {/* Left side */} 
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#413939]'>
          <div className='flex items-center gap-2'>
            
            
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex items center gap-2'>
            <p className='font-semibold text-sm md:text base'>SHOP NOW</p>
          </div>
        </div>
      </div> {/* Added missing closing div for the Left Side */}
      {/* Right side */}
      <img className='w-full max-w-md mx-auto object-contain' src={assets.hero_img} alt="Hero Image" />
    </div> /* Main wrapper ends here */
  )
}

export default Hero