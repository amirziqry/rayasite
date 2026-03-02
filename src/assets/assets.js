// 1. Import all images and icons
import logo from './dress.png';
import cart_icon from './cart.svg';
import search_icon from './search.svg';
import profile_icon from './profile.svg';
import back_icon from './back.svg';
import menu_icon from './menu.svg';
import hero_img from './hero_img.jpg'; // Example hero image, replace with actual image if available

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
        _id: "aaaaa",
        name: "Sample Product Name",
        description: "A high-quality product description goes here.",
        price: 100,
        image: [], // You can add your product image imports here
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: Date.now(),
        bestseller: true
    },
    // You can add more product objects below...
]