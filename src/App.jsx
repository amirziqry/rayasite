import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Product from './pages/product.jsx'
import Cart from './pages/cart.jsx'
import PlaceOrder from './pages/placeOrder.jsx'
import Orders from './pages/orders.jsx'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'
import Collection from './pages/collection.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* 2. Use the Capitalized component name */}
      <Navbar />
      
      {/* 3. Changed <Route> to <Routes> and updated element names */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <footer/>
    </div>
  )
}

export default App