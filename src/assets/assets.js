// 1. Import all images and icons
import logo from './lx.jpg';
import cart_icon from './cart.svg';
import search_icon from './search.svg';
import profile_icon from './profile.svg';
import back_icon from './back.svg';
import menu_icon from './menu.svg';
import hero_img from './yellowdress.png'; // Example hero image, replace with actual image if available
import blackdress from './blackdress3.png'
import pinkdress from './pinkdress3.png'
import greendress from './greendress3.png'
import pink2 from './pink3.png'
import navy from './navy.jpeg'
import navygold from './navygold.jpeg'
import model1 from './model1.jpeg'
import model2 from './model2.jpeg'
import model3 from './model3.jpeg'
import model4 from './model4.jpeg'
import model5 from './model5.jpeg'
import model6 from './model6.jpeg'
import kain1 from './kain1.jpeg'
import kain2 from './kain2.jpeg'
import kain3 from './kain3.jpeg'
import kain4 from './kain4.jpeg'
import kain5 from './kain5.jpeg'
import kain6 from './kain6.jpeg'


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
        image: [pink2],
        category: "Women",
        subCategory: "Kebaya Modern",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "6",
        name: "Navy Blue with Gold Accents",
        description: "Premium Pakistani Lawn Schiffli Embroidered 3-Piece Unstitched Suit		- Breathable fabric		- Elegant design		- Matching dupatta		- Tailor to your own style		- Limited stock",
        price: 200,
        image: [navygold],
        category: "Women",
        subCategory: "Unstitched Suit",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "7",
        name: "3-piece embroidered lawn suit",
        description: "- embroidered textured lawn shirt - ⁠dyed textured lawn sleeves & back - ⁠printed manaar dupatta - ⁠embroidered hem & sleeves border",
        price: 180,
        image: [model1],
        category: "Women",
        subCategory: "Unstitched Suit",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "8",
        name: "3-piece embroidered lawn suit",
        description: "- embroidered textured lawn shirt - ⁠embroidered textured lawn sleeves - ⁠embroidered blended chiffon dupatta - ⁠embroidered front & hem border",
        price: 270,
        image: [model2],
        category: "Women",
        subCategory: "Unstitched Suit",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "9",
        name: "3-piece embroidered lawn suit",
        description: "- embroidered viscose satin shirt front - ⁠embroidered viscose satin sleeves - ⁠printed viscose satin back - ⁠embroidered blended chiffon dupatta",
        price: 300,
        image: [model3],
        category: "Women",
        subCategory: "Unstitched Suit",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "10",
        name: "3-piece embroidered lawn suit",
        description: "- embroidered lawn shirt - ⁠printed lawn sleeves & back - ⁠printed voile dupatta - ⁠embroidered hem patch",
        price: 130,
        image: [model4],
        category: "Women",
        subCategory: "Unstitched Suit",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "11",
        name: "3-piece embroidered lawn suit",
        description: "- embroidered lawn shirt - ⁠printed lawn sleeves & back - ⁠printed voile dupatta - ⁠embroidered front border",
        price: 130,
        image: [model5],
        category: "Women",
        subCategory: "Unstitched Suit",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "12",
        name: "3-piece embroidered lawn suit",
        description: "- embroidered lawn shirt - ⁠embroidered lawn sleeves - ⁠embroidered blended karandi dupatta - ⁠embroidered neckline",
        price: 300,
        image: [model6],
        category: "Women",
        subCategory: "Unstitched Suit",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    },
]