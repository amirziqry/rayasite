// 1. Import all images and icons
import logo from './dress.png';
import cart_icon from './cart.svg';
import search_icon from './search.svg';
import profile_icon from './profile.svg';
import back_icon from './back.svg';
import menu_icon from './menu.svg';
import hero_img from './hero_img.jpg'; // Example hero image, replace with actual image if available
import blackdress from './blackdress.jpeg'
import pinkdress from './pinkdress.jpeg'
import greendress from './greendress.jpeg'

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
        name: "Black Floral Suit",
        description: "Elegant black suit adorned with intricate silver floral embroidery. Crafted from premium fabric with a flattering V-neckline and full sleeves. Perfect for formal occasions and festive gatherings.",
        price: 299.90,
        image: [blackdress],
        category: "Women",
        subCategory: "Suit",
        sizes: ["M"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "2",
        name: "Pink Embroidered Suit",
        description: "Soft pink suit featuring delicate white embroidery in a diamond lattice pattern. Made from breathable cotton blend with a round neckline and elegant cuffs. A graceful choice for everyday elegance.",
        price: 259.90,
        image: [pinkdress],
        category: "Women",
        subCategory: "Suit",
        sizes: ["M"],
        date: 1716634345449,
        bestseller: false
    },
    {
        _id: "3",
        name: "Green Lace Suit",
        description: "Fresh mint green suit with stunning white lace overlay and broderie anglaise hemline. Lightweight and airy fabric ideal for warm weather. A timeless piece that blends tradition with modern style.",
        price: 279.90,
        image: [greendress],
        category: "Women",
        subCategory: "Suit",
        sizes: ["M"],
        date: 1716634345450,
        bestseller: false
    }
]