// 1. Import all images and icons
import logo from './lx.jpg';
import cart_icon from './cart.svg';
import search_icon from './search.svg';
import profile_icon from './profile.svg';
import back_icon from './back.svg';
import menu_icon from './menu.svg';
import hero_img from './hero_img.jpg'; // Example hero image, replace with actual image if available
import blackdress from './blackdress3.png'
import pinkdress from './pinkdress3.png'
import greendress from './greendress3.png'

// Import at least one product image to test
// import p_img1 from './p_img1.png'; 

// 2. Export the assets object for UI elements
export const assets = {
    logo,
    cart_icon,
    search_icon,
    profile_icon,
    back_icon,
    menu_icon,
    hero_img,
}

// 3. Export the products array (Data for your store)
export const products = [
    {
        _id: "1",
        name: "Midnight Black",
        description: "Schiffli embroidered lawn shirt from Pakistan, a premium lightweight breathable cotton fabric	featuring intricate, lace-like embroidery and delicate cutwork created by a specialised machine embroidery. Schiffli embroidery lawn shirt featuring detailed designs, floral with lots of small stitched holes and delicate patterns",
        price: 400,
        image: [blackdress],
        category: "Women",
        subCategory: "Kebaya Modern",
        sizes: ["M"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "2",
        name: "French Pink",
        description: "Schiffli embroidered lawn shirt from Pakistan, a premium lightweight breathable cotton fabric	featuring intricate, lace-like embroidery and delicate cutwork created by a specialised machine embroidery. Schiffli embroidery lawn shirt featuring detailed designs, floral with lots of small stitched holes and delicate patterns.								It is versatile, making it suitable for both casual and formal wear, including festive or special occasions.",
        price: 380,
        image: [pinkdress],
        category: "Women",
        subCategory: "Suit",
        sizes: ["M"],
        date: 1716634345449,
        bestseller: false
    },
    {
        _id: "3",
        name: "Mint Green",
        description: "Schiffli embroidered lawn shirt from Pakistan, a premium lightweight breathable cotton fabric	featuring intricate, lace-like embroidery and delicate cutwork created by a specialised machine embroidery. Schiffli embroidery lawn shirt featuring detailed designs, floral with lots of small stitched holes and delicate patterns.								It is versatile, making it suitable for both casual and formal wear, including festive or special occasions.",
        price: 400,
        image: [greendress],
        category: "Women",
        subCategory: "Modern Kurung",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "4",
        name: "Peachy Pink",
        description: "Schiffli embroidered lawn shirt from Pakistan, a premium lightweight breathable cotton fabric	featuring intricate, lace-like embroidery and delicate cutwork created by a specialised machine embroidery. Schiffli embroidery lawn shirt featuring detailed designs, floral with lots of small stitched holes and delicate patterns.							 It is versatile, making it suitable for both casual and formal wear, including festive or special occasions.",
        price: 550,
        image: [greendress],
        category: "Women",
        subCategory: "Kebaya Modern",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    }
]