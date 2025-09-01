// src/data.js (पूरा और अंतिम कोड)

import cotImage1 from '../assets/images/cot-image-1.png';
import cotImage2 from '../assets/images/cot-image-3.png';
import cotImage3 from '../assets/images/cot-image-3.png';
import changerImage1 from '../assets/images/changer-image-1.png';
import changerImage2 from '../assets/images/changer-image-2.png';
import changerImage3 from '../assets/images/changer-image-3.png';
import storageImage1 from '../assets/images/storage-image-1.png';
import storageImage2 from '../assets/images/storage-image-2.png';
import storageImage3 from '../assets/images/storage-image-3.png';
import themeImage1 from '../assets/images/theme-image-1.png';
import themeImage2 from '../assets/images/theme-image-2.png';
import themeImage3 from '../assets/images/theme-image-3.png';
import mattressImage1 from '../assets/images/mattress-image-1.png';
import mattressImage2 from '../assets/images/mattress-image-2.png';
import mattressImage3 from '../assets/images/mattress-image-3.png';
import accessoryImage1 from '../assets/images/accessory-image-1.png';
import accessoryImage2 from '../assets/images/accessory-image-2.png';
import accessoryImage3 from '../assets/images/accessory-image-3.png';
import softToyImage1 from '../assets/images/soft-toy-image-1.png';
import softToyImage2 from '../assets/images/soft-toy-image-2.png';
import softToyImage3 from '../assets/images/soft-toy-image-3.png';


// --- EXPORT 1: CATEGORIES (पूरी लिस्ट) ---
export const CATEGORIES = [
  {
    id: 'cots-cradles',
    name: 'Cots & Cradles',
    subCategories: [
      { id: 'nightingale-cot', name: 'Nightingale Cot' },
      { id: 'perch-cot', name: 'Perch Cot' },
      { id: 'snow-angel-cot', name: 'Snow Angel Cot' },
      { id: 'sweet-pea-cot', name: 'Sweet Pea Cot' },
      { id: 'starry-night-cot', name: 'Starry Night Cot' },
      { id: 'in-the-clouds-cot', name: 'In The Clouds Cot' },
      { id: 'lullaby-cradle', name: 'Lullaby Cradle' },
      { id: 'dove-cot', name: 'Dove Cot' },
    ],
    featuredProducts: [
      { id: 'p1', name: 'Nightingale Cot Pink', image: cotImage1 },
      { id: 'p2', name: 'Classic Wooden Cot', image: cotImage2 },
      { id: 'p3', name: 'Modern White Cot', image: cotImage3 },
    ],
  },
  {
    id: 'changing-tables-dressers',
    name: 'Changing tables & Dressers',
    subCategories: [
      { id: 'nightingale-changer', name: 'Nightingale Changing Table' },
      { id: 'snow-angel-changer', name: 'Snow Angel Changing Table' },
      { id: 'starry-night-changer', name: 'Starry Night Changing Table' },
      { id: 'changing-tray', name: 'Changing Tray' },
      { id: 'in-the-clouds-changer', name: 'In The Clouds Changing Table' },
    ],
    featuredProducts: [
      { id: 'p4', name: 'Compact Changing Table', image: changerImage1 },
      { id: 'p5', name: 'Dresser with Changer', image: changerImage2 },
      { id: 'p6', name: 'Simple Changing Tray', image: changerImage3 },
    ],
  },
  {
    id: 'storage-lifestyle',
    name: 'Storage & Lifestyle',
    subCategories: [
      { id: 'perch-almirah-small', name: 'Perch Almirah - Small Hut' },
      { id: 'perch-almirah-big', name: 'Perch Almirah - Big Hut' },
      { id: 'book-shelf-small', name: 'Book Shelf - Small Hut' },
      { id: 'book-shelf-big', name: 'Book Shelf - Big Hut' },
      { id: 'nightingale-almirah', name: 'Nightingale Almirah' },
      { id: 'blackboard', name: 'Blackboard' },
      { id: 'rocking-chair', name: 'Rocking Chair' },
      { id: 'in-the-clouds-shelf', name: 'In The Clouds Shelf' },
      { id: 'in-the-clouds-toy-box', name: 'In The Clouds Toy Box' },
    ],
    featuredProducts: [
      { id: 'p7', name: 'House Bookshelf', image: storageImage1 },
      { id: 'p8', name: 'Bunny Rocking Chair', image: storageImage2 },
      { id: 'p9', name: 'Cloud Wall Shelf', image: storageImage3 },
    ],
  },
  {
    id: 'themes',
    name: 'Themes',
    subCategories: [
      { id: 'dove-theme', name: 'Dove Theme' },
      { id: 'perch-theme', name: 'Perch Theme' },
      { id: 'starry-night-theme', name: 'Starry Night Theme' },
      { id: 'snow-angel-theme', name: 'Snow Angel Theme' },
      { id: 'nightingale-theme', name: 'Nightingale Theme' },
      { id: 'in-the-clouds-theme', name: 'In The Clouds Theme' },
    ],
    featuredProducts: [
      { id: 'p10', name: 'Forest Theme Room', image: themeImage1 },
      { id: 'p11', name: 'Minimalist Theme Room', image: themeImage2 },
      { id: 'p12', name: 'Cloud Theme Room', image: themeImage3 },
    ],
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    subCategories: [
      { id: 'foam-rect', name: 'Foam Mattress For Cots-Rectangular' },
      { id: 'foam-oval', name: 'Foam Mattress For Cots-Oval' },
      { id: 'spring-rect', name: 'Spring Mattress For Cots-Rectangular' },
      { id: 'spring-oval', name: 'Spring Mattress For Cots-Oval' },
      { id: 'foam-changer', name: 'Foam Mattress For Changing Tray' },
      { id: 'foam-cradle', name: 'Foam Mattress For Cradlle' },
      { id: 'waterproof-protector', name: 'Fitted Waterproof Mattress Protector' },
    ],
    featuredProducts: [
      { id: 'p13', name: 'Rectangular Mattress', image: mattressImage1 },
      { id: 'p14', name: 'Oval Mattress', image: mattressImage2 },
      { id: 'p15', name: 'Mattress Protector', image: mattressImage3 },
    ],
  },
  {
    id: 'nursery-bedding-accessories',
    name: 'Nursery, Bedding & Accessories',
    isNew: true,
    subCategories: [
      { id: '6-piece-set', name: 'Abracadabra 6 Piece Cot Bedding Set' },
      { id: 'baby-quilt', name: 'Abracadabra Baby Quilt' },
      { id: 'musical-mobile', name: 'Abracadabra Musical Mobile' },
      { id: 'rai-pillow', name: 'Abracadabra Rai Pillow' },
      { id: 'storage-basket', name: 'Abracadabra Storage basket' },
    ],
    featuredProducts: [
      { id: 'p16', name: 'Pink Bedding Set', image: accessoryImage1 },
      { id: 'p17', name: 'Dino Musical Mobile', image: accessoryImage2 },
      { id: 'p18', name: 'Blue Bumper Set', image: accessoryImage3 },
    ],
  },
  {
    id: 'soft-toys',
    name: 'Soft Toys',
    subCategories: [
      { id: 'knitted-stuffed', name: 'Cotton Knitted Stuffed Soft Toy' },
      { id: 'knitted-plush', name: 'Cotton Knitted Stuffed/Plush Soft Toy' },
    ],
    featuredProducts: [
      { id: 'p19', name: 'Holiday Bear', image: softToyImage1 },
      { id: 'p20', name: 'Leo the Lion', image: softToyImage2 },
      { id: 'p21', name: 'Fin the Shark', image: softToyImage3 },
    ],
  },
];

// --- EXPORT 2: PRODUCTS (अपडेटेड और फ़िल्टरिंग के लिए तैयार) ---
export const PRODUCTS = [
  // Cots & Cradles
  { 
    id: 'p1', 
    categoryId: 'cots-cradles', 
    images: [cotImage1, cotImage2, cotImage3, cotImage1], // इमेज गैलरी के लिए images का ऐरे
    rating: '4.8', 
    reviews: '10,000+ Happy Cusotmer', 
    unitsSold: 700,
    name: 'Nightingale Cot', 
    originalPrice: '60,200.00', 
    discountedPrice: '51,170.00', 
    price: 51170, 
    color: 'White', 
    finish: 'Matte', 
    size: 'Standard', 
    featured: true,
    stock: 5,
    availableColors: ['#EAE9E4', '#D8D8D8', '#C4BDBE'],
    description: "The Nightingale Cot is designed with utmost care to provide a safe and comfortable sleeping environment for your baby. Made from premium quality wood, it features a non-toxic finish and adjustable mattress heights.",
    specifications: "Dimensions: 129.54 cm x 67.945 cm\nMaterial: European Birch Wood\nAge Group: 0-3 years\nWarranty: 1 Year",
    specialFeatures: "Non-Toxic Paint, ISO Certified, Quick Delivery, Customization Available",
    deliveryDetails: "Delivered within 7-10 working days. Free shipping on all prepaid orders. Assembly will be provided by our team.",
    warrantyTerms: "1-year warranty against any manufacturing defects. The warranty does not cover damages due to misuse of the product."
  },
  
  { id: 'p2', categoryId: 'cots-cradles', image: cotImage2, rating: '4.9', reviews: '150+', name: 'Perch Cot', originalPrice: '55,000.00', discountedPrice: '48,000.00', price: 48000, color: 'Natural', finish: 'Glossy', size: 'Large', featured: true },
  { id: 'p3', categoryId: 'cots-cradles', image: cotImage3, rating: '4.7', reviews: '90+', name: 'Dove Cot', originalPrice: '62,000.00', discountedPrice: '52,500.00', price: 52500, color: 'White', finish: 'Satin', size: 'Standard' },
  { id: 'p22', categoryId: 'cots-cradles', image: cotImage2, rating: '4.8', reviews: '110+', name: 'Snow Angel Cot', originalPrice: '61,500.00', discountedPrice: '52,200.00', price: 52200, color: 'White', finish: 'Matte', size: 'Large' },
  { id: 'p23', categoryId: 'cots-cradles', image: cotImage1, rating: '4.9', reviews: '180+', name: 'Starry Night Cot', originalPrice: '58,000.00', discountedPrice: '49,900.00', price: 49900, color: 'Grey', finish: 'Matte', size: 'Standard', featured: true },
  { id: 'p24', categoryId: 'cots-cradles', image: cotImage3, rating: '4.6', reviews: '80+', name: 'Lullaby Cradle', originalPrice: '45,000.00', discountedPrice: '38,000.00', price: 38000, color: 'Natural', finish: 'Satin', size: 'Small' },
  { id: 'p25', categoryId: 'cots-cradles', image: cotImage1, rating: '4.7', reviews: '125+', name: 'Sweet Pea Cot', originalPrice: '59,000.00', discountedPrice: '50,000.00', price: 50000, color: 'White', finish: 'Glossy', size: 'Standard' },

  // Changing tables & Dressers
  { id: 'p4', categoryId: 'changing-tables-dressers', image: changerImage1, rating: '4.8', reviews: '120+ ', name: 'Compact Changer', originalPrice: '30,000.00', discountedPrice: '25,000.00', price: 25000, color: 'White', finish: 'Matte', size: 'Standard', featured: true },
  { id: 'p5', categoryId: 'changing-tables-dressers', image: changerImage2, rating: '4.9', reviews: '180+ ', name: 'Dresser Changer Combo', originalPrice: '45,000.00', discountedPrice: '40,000.00', price: 40000, color: 'Natural', finish: 'Satin', size: 'Large', featured: true },
  { id: 'p6', categoryId: 'changing-tables-dressers', image: changerImage3, rating: '4.6', reviews: '70+ ', name: 'Simple Changing Tray', originalPrice: '10,000.00', discountedPrice: '8,000.00', price: 8000, color: 'White', finish: 'Glossy', size: 'Small' },
  { id: 'p26', categoryId: 'changing-tables-dressers', image: changerImage2, rating: '4.7', reviews: '130+ ', name: 'Nightingale Changer', originalPrice: '35,000.00', discountedPrice: '29,500.00', price: 29500, color: 'White', finish: 'Matte', size: 'Standard' },
  { id: 'p27', categoryId: 'changing-tables-dressers', image: changerImage1, rating: '4.8', reviews: '150+ ', name: 'Snow Angel Changer', originalPrice: '38,000.00', discountedPrice: '32,000.00', price: 32000, color: 'Grey', finish: 'Matte', size: 'Large' },
  
  // Storage & Lifestyle
  { id: 'p7', categoryId: 'storage-lifestyle', image: storageImage1, rating: '4.9', reviews: '200+ ', name: 'House Bookshelf', originalPrice: '22,000.00', discountedPrice: '18,500.00', price: 18500, color: 'Natural', finish: 'Matte', size: 'Large', featured: true },
  { id: 'p8', categoryId: 'storage-lifestyle', image: storageImage2, rating: '4.8', reviews: '160+ ', name: 'Bunny Rocking Chair', originalPrice: '15,000.00', discountedPrice: '12,000.00', price: 12000, color: 'White', finish: 'Satin', size: 'Standard' },
  { id: 'p9', categoryId: 'storage-lifestyle', image: storageImage3, rating: '4.7', reviews: '110+ ', name: 'Cloud Wall Shelf', originalPrice: '8,000.00', discountedPrice: '6,500.00', price: 6500, color: 'White', finish: 'Glossy', size: 'Small', featured: true },
  { id: 'p28', categoryId: 'storage-lifestyle', image: storageImage1, rating: '4.9', reviews: '220+ ', name: 'Perch Almirah', originalPrice: '40,000.00', discountedPrice: '34,000.00', price: 34000, color: 'Natural', finish: 'Matte', size: 'Large' },
  { id: 'p29', categoryId: 'storage-lifestyle', image: storageImage3, rating: '4.6', reviews: '95+ ', name: 'In The Clouds Toy Box', originalPrice: '12,000.00', discountedPrice: '9,900.00', price: 9900, color: 'White', finish: 'Satin', size: 'Standard' },
  { id: 'p30', categoryId: 'storage-lifestyle', image: storageImage2, rating: '4.8', reviews: '170+ ', name: 'Kids Blackboard Easel', originalPrice: '9,000.00', discountedPrice: '7,500.00', price: 7500, color: 'Natural', finish: 'Matte', size: 'Standard' },

  // Themes
  { id: 'p10', categoryId: 'themes', image: themeImage1, rating: '4.9', reviews: '80+ ', name: 'Forest Theme', originalPrice: '1,50,000', discountedPrice: '1,30,000', price: 130000, color: 'Green', featured: true },
  { id: 'p11', categoryId: 'themes', image: themeImage2, rating: '4.8', reviews: '60+ ', name: 'Minimalist Theme', originalPrice: '1,40,000', discountedPrice: '1,25,000', price: 125000, color: 'White' },
  { id: 'p12', categoryId: 'themes', image: themeImage3, rating: '5.0', reviews: '95+ ', name: 'Cloud Theme', originalPrice: '1,60,000', discountedPrice: '1,45,000', price: 145000, color: 'Blue', featured: true },
  { id: 'p31', categoryId: 'themes', image: themeImage1, rating: '4.9', reviews: '75+ ', name: 'Starry Night Theme', originalPrice: '1,55,000', discountedPrice: '1,35,000', price: 135000, color: 'Grey' },
  { id: 'p32', categoryId: 'themes', image: themeImage2, rating: '4.8', reviews: '85+ ', name: 'Dove Theme', originalPrice: '1,45,000', discountedPrice: '1,28,000', price: 128000, color: 'White', featured: true },

  // Mattresses
  { id: 'p13', categoryId: 'mattresses', image: mattressImage1, rating: '4.7', reviews: '200+ ', name: 'Rectangular Mattress', originalPrice: '8,000', discountedPrice: '6,500', price: 6500, size: 'Standard', featured: true },
  { id: 'p14', categoryId: 'mattresses', image: mattressImage2, rating: '4.8', reviews: '150+ ', name: 'Oval Mattress', originalPrice: '8,500', discountedPrice: '7,000', price: 7000, size: 'Standard' },
  { id: 'p15', categoryId: 'mattresses', image: mattressImage3, rating: '4.9', reviews: '300+ ', name: 'Mattress Protector', originalPrice: '3,000', discountedPrice: '2,200', price: 2200, size: 'Standard', featured: true },
  { id: 'p33', categoryId: 'mattresses', image: mattressImage1, rating: '4.7', reviews: '250+ ', name: 'Spring Mattress - Rect.', originalPrice: '10,000', discountedPrice: '8,500', price: 8500, size: 'Large' },
  { id: 'p34', categoryId: 'mattresses', image: mattressImage2, rating: '4.8', reviews: '180+ ', name: 'Foam Mattress - Oval', originalPrice: '9,000', discountedPrice: '7,500', price: 7500, size: 'Large' },
  { id: 'p35', categoryId: 'mattresses', image: mattressImage3, rating: '4.9', reviews: '350+ ', name: 'Waterproof Protector', originalPrice: '3,200', discountedPrice: '2,500', price: 2500, size: 'Large' },

  // Nursery, Bedding & Accessories
  { id: 'p16', categoryId: 'nursery-bedding-accessories', image: accessoryImage1, rating: '4.8', reviews: '180+ ', name: 'Pink Bedding Set', originalPrice: '12,000', discountedPrice: '9,500', price: 9500, color: 'Pink', featured: true },
  { id: 'p17', categoryId: 'nursery-bedding-accessories', image: accessoryImage2, rating: '4.9', reviews: '220+ ', name: 'Dino Musical Mobile', originalPrice: '4,000', discountedPrice: '3,200', price: 3200, color: 'Green' },
  { id: 'p18', categoryId: 'nursery-bedding-accessories', image: accessoryImage3, rating: '4.7', reviews: '160+ ', name: 'Blue Bumper Set', originalPrice: '10,000', discountedPrice: '8,000', price: 8000, color: 'Blue', featured: true },
  { id: 'p36', categoryId: 'nursery-bedding-accessories', image: accessoryImage1, rating: '4.8', reviews: '190+ ', name: 'Abracadabra Baby Quilt', originalPrice: '6,000', discountedPrice: '4,800', price: 4800, color: 'Pink' },
  { id: 'p37', categoryId: 'nursery-bedding-accessories', image: accessoryImage2, rating: '4.9', reviews: '250+ ', name: 'Forest Musical Mobile', originalPrice: '4,200', discountedPrice: '3,500', price: 3500, color: 'Green', featured: true },
  { id: 'p38', categoryId: 'nursery-bedding-accessories', image: accessoryImage3, rating: '4.7', reviews: '170+ ', name: '6 Piece Bedding Set', originalPrice: '12,500', discountedPrice: '10,000', price: 10000, color: 'Blue' },
  
  // Soft Toys
  { id: 'p19', categoryId: 'soft-toys', image: softToyImage1, rating: '4.9', reviews: '300+ ', name: 'Holiday Bear', originalPrice: '2,000.00', discountedPrice: '1,500.00', price: 1500, color: 'Brown', featured: true },
  { id: 'p20', categoryId: 'soft-toys', image: softToyImage2, rating: '5.0', reviews: '400+ ', name: 'Leo the Lion', originalPrice: '2,500.00', discountedPrice: '2,000.00', price: 2000, color: 'Yellow', featured: true },
  { id: 'p21', categoryId: 'soft-toys', image: softToyImage3, rating: '4.8', reviews: '250+ ', name: 'Fin the Shark', originalPrice: '2,200.00', discountedPrice: '1,800.00', price: 1800, color: 'Blue' },
  { id: 'p39', categoryId: 'soft-toys', image: softToyImage1, rating: '4.9', reviews: '320+ ', name: 'Knitted Bunny', originalPrice: '2,100.00', discountedPrice: '1,600.00', price: 1600, color: 'Grey' },
  { id: 'p40', categoryId: 'soft-toys', image: softToyImage2, rating: '5.0', reviews: '450+ ', name: 'Plush Elephant', originalPrice: '2,800.00', discountedPrice: '2,200.00', price: 2200, color: 'Grey', featured: true },
  { id: 'p41', categoryId: 'soft-toys', image: softToyImage3, rating: '4.8', reviews: '280+ ', name: 'Dino Soft Toy', originalPrice: '2,400.00', discountedPrice: '1,900.00', price: 1900, color: 'Green' },
  { id: 'p42', categoryId: 'soft-toys', image: softToyImage1, rating: '4.9', reviews: '350+ ', name: 'Teddy The Bear', originalPrice: '2,000.00', discountedPrice: '1,550.00', price: 1550, color: 'Brown' },
];
