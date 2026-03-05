import React, { useContext, useState, useEffect } from 'react'
import { shopContext } from '../context/shopContext.jsx'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, getCartAmount, delivery_fee } = useContext(shopContext);
    const [cartData, setCartData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const tempData = [];
        for (const itemId in cartItems)
            for (const size in cartItems[itemId])
                if (cartItems[itemId][size] > 0)
                    tempData.push({ _id: itemId, size, quantity: cartItems[itemId][size] });
        setCartData(tempData);
    }, [cartItems]);

    if (cartData.length === 0) return (
        <div className='text-center py-24'>
            <p className='text-2xl text-gray-400'>Your cart is empty.</p>
            <button onClick={() => navigate('/collection')} className='mt-6 px-8 py-3 bg-black text-white text-sm rounded hover:bg-gray-800'>
                CONTINUE SHOPPING
            </button>
        </div>
    );

    return (
        <div className='pt-10 pb-20'>
            <h1 className='text-2xl font-semibold text-gray-800 mb-8'>YOUR CART</h1>

            <div className='space-y-4'>
                {cartData.map((item, index) => {
                    const p = products.find(x => x._id === item._id);
                    if (!p) return null;
                    return (
                        <div key={index} className='flex items-center gap-4 py-4 border-b'>
                            <img src={p.image[0]} alt={p.name} className='w-20 h-24 object-cover rounded' />
                            <div className='flex-1'>
                                <p className='text-sm font-medium text-gray-800'>{p.name}</p>
                                <p className='text-sm text-gray-500 mt-1'>Size: {item.size}</p>
                                <p className='text-sm font-semibold mt-1'>{currency}{p.price.toFixed(2)}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))} className='w-7 h-7 border rounded hover:bg-gray-100'>−</button>
                                <span className='text-sm w-6 text-center'>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)} className='w-7 h-7 border rounded hover:bg-gray-100'>+</button>
                            </div>
                            <button onClick={() => updateQuantity(item._id, item.size, 0)} className='text-gray-400 hover:text-red-500 text-lg ml-2'>✕</button>
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            <div className='mt-10 flex justify-end'>
                <div className='w-full sm:w-80 bg-gray-50 rounded-lg p-6 space-y-3'>
                    <h2 className='text-base font-semibold text-gray-800 mb-4'>ORDER SUMMARY</h2>
                    <div className='flex justify-between text-sm text-gray-600'><span>Subtotal</span><span>{currency}{getCartAmount().toFixed(2)}</span></div>
                    <div className='flex justify-between text-sm text-gray-600'><span>Delivery Fee</span><span>{currency}{delivery_fee.toFixed(2)}</span></div>
                    <div className='border-t pt-3 flex justify-between text-sm font-bold text-gray-900'><span>Total</span><span>{currency}{(getCartAmount() + delivery_fee).toFixed(2)}</span></div>
                    <button onClick={() => navigate('/place-order')} className='w-full mt-4 py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;