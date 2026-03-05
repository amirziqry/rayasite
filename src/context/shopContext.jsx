import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const shopContext = createContext();

const ShopProvider = (props) => {

    const currency = 'RM';
    const delivery_fee = 10;
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId, size) => {
        if (!size) { alert("Please select a size"); return; }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) { cartData[itemId][size] += 1; }
            else { cartData[itemId][size] = 1; }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let total = 0;
        for (const id in cartItems)
            for (const size in cartItems[id])
                total += cartItems[id][size];
        return total;
    };

    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        if (quantity === 0) delete cartData[itemId][size];
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let total = 0;
        for (const id in cartItems) {
            const item = products.find(p => p._id === id);
            if (!item) continue;
            for (const size in cartItems[id])
                total += item.price * cartItems[id][size];
        }
        return total;
    };

    const value = { products, currency, delivery_fee, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount };

    return (
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    );
};

export default ShopProvider;