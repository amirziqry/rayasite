import React from 'react'
import Title from '../components/title.jsx'

const About = () => {
  return (
    <div className='pt-10 pb-20 px-6 max-w-4xl mx-auto'>

      <div className='text-center pb-10 text-3xl'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='flex flex-col gap-8 text-gray-600 text-sm md:text-base leading-relaxed'>
        <p>
          Discover a curated collection of premium, luxurious garments, carefully chosen to reflect
          timeless elegance and exceptional quality. Each piece is handpicked personally to provide
          our customers with exclusive and sophisticated fashion choices — bringing you an elevated
          online shopping experience.
        </p>
        <p>
          From ready-made baju kurung and kebaya in traditional and contemporary styles to
          high-quality loose pieces, each item is carefully selected for its elegance and craftsmanship.
          Loose fabrics can be sent to your tailor to create a bespoke design that matches your
          personal style, while our ready-made pieces provide a sophisticated, convenient option
          for immediate wear.
        </p>
        <p>
          Whether you prefer classic traditions or modern interpretations, every item in our collection
          is designed to bring quality, style, and versatility to your wardrobe.
        </p>
      </div>

      {/* Values strip */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-center'>
        {[
          { title: 'Handpicked', desc: 'Every piece personally selected for quality and elegance.' },
          { title: 'Craftsmanship', desc: 'Garments made with care, tradition, and attention to detail.' },
          { title: 'Your Style', desc: 'Ready-to-wear or bespoke — we cater to every preference.' },
        ].map(({ title, desc }) => (
          <div key={title} className='border border-gray-200 rounded-xl p-6 flex flex-col gap-2'>
            <h3 className='font-semibold text-gray-800 tracking-wide'>{title}</h3>
            <p className='text-xs text-gray-500 leading-relaxed'>{desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default About