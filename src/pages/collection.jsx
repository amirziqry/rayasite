import React, { useContext, useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../context/shopContext.jsx'
import Title from '../components/title.jsx'

import blackdress from '../assets/blackdress.jpeg'
import blackpack from '../assets/blackpack.jpeg'
import blackvideo from '../assets/blackvideo.mp4'
import pinkdress from '../assets/pinkdress.jpeg'
import pinkpack from '../assets/pinkpack.jpeg'
import pinkvideo from '../assets/pinkvideo.mp4'
import greendress from '../assets/greendress.jpeg'
import greenpack from '../assets/greenpack.jpeg'
import greenvideo from '../assets/greenvideo.mp4'

const mediaData = [
  {
    productId: "1",
    label: "Black Floral Suit",
    slides: [
      { type: "image", src: blackdress },
      { type: "image", src: blackpack },
      { type: "video", src: blackvideo },
    ]
  },
  {
    productId: "2",
    label: "Pink Embroidered Suit",
    slides: [
      { type: "image", src: pinkdress },
      { type: "image", src: pinkpack },
      { type: "video", src: pinkvideo },
    ]
  },
  {
    productId: "3",
    label: "Green Lace Suit",
    slides: [
      { type: "image", src: greendress },
      { type: "image", src: greenpack },
      { type: "video", src: greenvideo },
    ]
  }
]

const ProductCarousel = ({ product, productData, currency, addToCart }) => {
  const [current, setCurrent] = useState(0)
  const [muted, setMuted] = useState(true)
  const [selectedSize, setSelectedSize] = useState('M')
  const [addedMsg, setAddedMsg] = useState(false)
  const videoRef = useRef(null)

  const prev = () => setCurrent(i => (i - 1 + product.slides.length) % product.slides.length)
  const next = () => setCurrent(i => (i + 1) % product.slides.length)

  useEffect(() => {
    if (product.slides[current].type === 'video' && videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [current])

  const handleAddToCart = () => {
    addToCart(productData._id, selectedSize)
    setAddedMsg(true)
    setTimeout(() => setAddedMsg(false), 2000)
  }

  const slide = product.slides[current]

  return (
    <div className='flex flex-col gap-4 bg-white rounded-xl shadow-sm p-4'>

      {/* Carousel */}
      <div className='relative w-full overflow-hidden rounded-lg bg-gray-100'>
        {slide.type === 'image' ? (
          <img src={slide.src} alt={product.label} className='w-full h-auto object-contain' />
        ) : (
          <div className='relative w-full'>
            <video
              ref={videoRef}
              src={slide.src}
              className='w-full h-auto'
              autoPlay loop muted={muted} playsInline
            />
            <button
              onClick={() => setMuted(m => !m)}
              className='absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full hover:bg-black/80 transition'
            >
              {muted ? '🔇 Unmute' : '🔊 Mute'}
            </button>
          </div>
        )}
        <button onClick={prev} className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center shadow'>‹</button>
        <button onClick={next} className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center shadow'>›</button>
      </div>

      {/* Dots */}
      <div className='flex justify-center gap-2 py-1'>
        {product.slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${current === i ? 'bg-black w-4' : 'bg-gray-300 w-2'}`}
          />
        ))}
      </div>

      {/* Product Info */}
      <div>
        <h2 className='text-base font-semibold text-gray-800'>{productData.name}</h2>
        <p className='text-lg font-bold text-gray-900 mt-1'>{currency}{productData.price.toFixed(2)}</p>
        <p className='text-sm text-gray-500 mt-2 leading-relaxed'>{productData.description}</p>
      </div>

      {/* Size */}
      <div>
        <p className='text-xs font-medium text-gray-600 mb-2 uppercase tracking-wider'>Size</p>
        <div className='flex gap-2'>
          {productData.sizes.map(size => (
            <button key={size} onClick={() => setSelectedSize(size)}
              className={`px-4 py-1.5 border text-sm rounded transition-all
                ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-700 hover:border-gray-500'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className='w-full py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 active:scale-95 transition-all'
      >
        {addedMsg ? '✓ ADDED TO CART' : 'ADD TO CART'}
      </button>
    </div>
  )
}

const Collection = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(shopContext)

  const visibleMedia = productId
    ? mediaData.filter(m => m.productId === productId)
    : mediaData

  return (
    <div className='pt-10 pb-20'>
      <div className='text-center pb-8 text-3xl'>
        <Title text1={'OUR'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Handcrafted with care — each piece tells a story.
        </p>
      </div>

      <div className={productId ? 'flex justify-center max-w-md mx-auto' : 'grid grid-cols-1 sm:grid-cols-3 gap-8'}>
        {visibleMedia.map((item) => {
          const productData = products.find(p => p._id === item.productId)
          if (!productData) return null
          return (
            <ProductCarousel
              key={item.productId}
              product={item}
              productData={productData}
              currency={currency}
              addToCart={addToCart}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Collection