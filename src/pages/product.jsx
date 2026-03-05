import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../context/shopContext.jsx'

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(shopContext);
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [addedMsg, setAddedMsg] = useState(false);

    useEffect(() => {
        const found = products.find(p => p._id === productId);
        setProduct(found);
        setSelectedSize('');
    }, [productId, products]);

    const handleAddToCart = () => {
        if (!selectedSize) { alert('Please select a size first.'); return; }
        addToCart(product._id, selectedSize);
        setAddedMsg(true);
        setTimeout(() => setAddedMsg(false), 2000);
    };

    if (!product) return <div className='text-center py-20 text-gray-400'>Loading...</div>;

    return (
        <div className='pt-10 pb-20'>
            <div className='flex flex-col sm:flex-row gap-10'>

                {/* Image */}
                <div className='flex-1'>
                    <img src={product.image[0]} alt={product.name} className='w-full max-w-lg rounded-lg object-cover' />
                </div>

                {/* Details */}
                <div className='flex-1'>
                    <h1 className='text-2xl font-semibold text-gray-800'>{product.name}</h1>
                    <p className='mt-4 text-2xl font-bold text-gray-900'>{currency}{product.price.toFixed(2)}</p>
                    <p className='mt-4 text-sm text-gray-600 leading-relaxed'>{product.description}</p>

                    {/* Sizes */}
                    <div className='mt-6'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>SELECT SIZE</p>
                        <div className='flex gap-2 flex-wrap'>
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border text-sm rounded transition-all
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
                        className='mt-8 w-full sm:w-auto px-12 py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 active:scale-95 transition-all'
                    >
                        {addedMsg ? '✓ ADDED TO CART' : 'ADD TO CART'}
                    </button>

                    <div className='mt-8 border-t pt-6 text-sm text-gray-500 space-y-2'>
                        <p>✔ Free shipping on orders above RM200</p>
                        <p>✔ Easy 30-day returns</p>
                        <p>✔ Authentic product guaranteed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;