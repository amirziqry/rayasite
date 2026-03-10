import React from 'react'
import Title from '../components/title.jsx'

const Contact = () => {
  return (
    <div className="pt-10 pb-20 max-w-xl mx-auto text-center">
      <div className="pb-8 text-3xl">
        <Title text1="CONTACT" text2="US" />
      </div>

      <p className="text-gray-500 text-sm mb-10">
        Have a question or need help with your order? Reach out to us anytime.
      </p>

      <div className="flex flex-col gap-6">

        <div className="flex flex-col items-center gap-1">
          <p className="text-xs uppercase tracking-widest text-gray-400">Email</p>
          <a href="mailto:byluxeatelier@gmail.com" className="text-gray-800 font-medium hover:text-black">
            byluxeatelier@gmail.com
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact