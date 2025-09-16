import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../Data/products';
import styles from './ProductDetailPage.module.css';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';
import ProductFeatures from '../components/ProductFeatures/ProductFeatures';
import FaqSection from '../components/FaqSection/FaqSection';

// --- Payment Icons ---
import paytmIcon from '../assets/icons/paytm.png';
import applePayIcon from '../assets/icons/ipay.png';
import mastercardIcon from '../assets/icons/mastercard.png';
import visaIcon from '../assets/icons/visa.png';
import amexIcon from '../assets/icons/american.png';
import RealStories from '../components/RealStories/RealStories';
import SignatureProjects from '../components/SignatureProjects/SignatureProjects';
import DesignProcess from '../components/DesignProcess/DesignProcess';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';

// --- Up arrow icon ---
import upArrowIcon from '../assets/icons/up.png';

// Accordion Component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Simple check to prevent rendering empty content
  if (!content) return null;
  return (
    <div className={styles.accordionItem}>
      <button 
        className={styles.accordionHeader} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <span className={styles.accordionIcon}>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          {/* Using pre-wrap to respect newlines in the data */}
          <p style={{ whiteSpace: 'pre-wrap' }}>{content}</p>
        </div>
      )}
    </div>
  );
};


const ProductDetailPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const thumbnailListRef = useRef(null);

  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) { return <div>Product not found!</div>; }

  const category = CATEGORIES.find(c => c.id === product.categoryId);

  const originalPriceNum = product.originalPrice ? parseFloat(product.originalPrice.replace(/,/g, '')) : 0;
  const discountedPriceNum = product.discountedPrice ? parseFloat(product.discountedPrice.replace(/,/g, '')) : 0;
  const youSave = originalPriceNum - discountedPriceNum;
  const discountPercentage = originalPriceNum > 0 ? Math.round((youSave / originalPriceNum) * 100) : 0;

  const scrollThumbnails = (direction) => {
    if (thumbnailListRef.current) {
      thumbnailListRef.current.scrollBy({
        top: direction * 90,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.productLayout}>
          {/* Left Side: Image Gallery */}
          <div className={styles.imageGallery}>
            <div className={styles.thumbnailWrapper}>
              <button className={`${styles.scrollArrow} ${styles.upArrow}`} onClick={() => scrollThumbnails(-1)}>
                <img src={upArrowIcon} alt="Scroll Up" className={styles.scrollArrowIcon} />
              </button>
              <div className={styles.thumbnailList} ref={thumbnailListRef}>
                {product.images && product.images.map((img, index) => (
                  <div key={index} className={`${styles.thumbnail} ${selectedImage === index ? styles.activeThumbnail : ''}`} onClick={() => setSelectedImage(index)}>
                    <img src={img} alt={`${product.name} thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className={`${styles.scrollArrow} ${styles.downArrow}`} onClick={() => scrollThumbnails(1)}>▼</button>
            </div>
            <div className={styles.mainImage}>
              {product.images && <img src={product.images[selectedImage]} alt={product.name} />}
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className={styles.productDetails}>
            {/* --- BREADCRUMBS MOVED HERE --- */}
            <div className={styles.breadcrumbs}>
              <Link to="/">Home</Link> &gt;
              {category && <Link to={`/collection/${category.id}`}>{category.name}</Link>} &gt;
              <span>{product.name}</span>
            </div>
            
            <div className={styles.reviewInfo}>
              <span className={styles.stars}>★★★★★</span>
              <span>{product.reviews} Happy Customer</span> |
              <span>{product.unitsSold} Units Sold</span>
            </div>

            <h1 className={styles.productTitle}>{product.name}</h1>

            <div className={styles.priceInfo}>
              <span className={styles.specialPrice}>Special Price: ₹{product.discountedPrice}</span>
              {product.originalPrice && <span className={styles.mrp}>MRP ₹{product.originalPrice}</span>}
            </div>

            {youSave > 0 &&
              <p> You save: <span>
                ₹{youSave.toLocaleString()} 
              </span>
                <span className={styles.savings}>
                ({discountPercentage}% off)
              </span>
              </p>
            }

            <div className={styles.featuresSection}>
              <div className={styles.featureItem}>Non<br />Toxic</div>
              <div className={styles.divider}></div>
              <div className={styles.featureItem}>ISO<br />Certified</div>
              <div className={styles.divider}></div>
              <div className={styles.featureItem}>Quick<br />Delivery</div>
              <div className={styles.divider}></div>
              <div className={styles.featureItem}>Customization<br />Available</div>
            </div>

            <div className={styles.optionsContainer}>
              <div className={styles.optionGroup}>
                <label>Size</label>
                <span className={styles.optionTag}>129.54 cm X 67.945 cm (Size 0-3 years)</span>
              </div>
              <div className={styles.optionGroup}>
                <label>Finish</label>
                <span className={styles.optionTag}>Non Toxic & child friendly finish</span>
              </div>
            </div>

            {product.availableColors &&
              <div className={styles.colorSelector}>
                <label>Colors</label>
                <div className={styles.colorSwatches}>
                  {product.availableColors.map((color, index) => (
                    <div key={index} className={`${styles.swatch} ${selectedColor === index ? styles.selectedColor : ''}`} style={{ backgroundColor: color }} onClick={() => setSelectedColor(index)} />
                  ))}
                </div>
              </div>
            }

            <div className={styles.quantitySelector}>
              <label>Quantity</label>
              <div className={styles.quantityInput}>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <input type="text" value={quantity} readOnly />
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
            </div>

            {product.stock && product.stock <= 5 &&
              <p className={styles.stockAlert}>
                <span className={styles.hourglass}>⏳</span>
                HURRY! Only {product.stock} units left in stock.
              </p>
            }

            <div className={styles.actionButtons}>
              <button className={styles.addToCartBtn}>Add to Cart</button>
              <button className={styles.customizationBtn}>For customization click here</button>
            </div>

            <div className={styles.secureCheckout}>
              <p>100% Secure Checkout</p>
              <div className={styles.paymentIcons}>
                <img src={paytmIcon} alt="Paytm" />
                <img src={applePayIcon} alt="Apple Pay" />
                <img src={mastercardIcon} alt="Mastercard" />
                <img src={visaIcon} alt="Visa" />
                <img src={amexIcon} alt="American Express" />
              </div>
            </div>
            
            {/* --- ACCORDION / FAQ SECTION MOVED HERE --- */}
            {/* This is the key change. It's now inside the right-hand column. */}
            <div className={styles.productInfoTabs}>
              <AccordionItem title="Product Description" content={product.description} />
              <AccordionItem title="Technical Specifications" content={product.specifications} />
              <AccordionItem title="Special Features" content={product.specialFeatures} />
              <AccordionItem title="Delivery Details" content={product.deliveryDetails} />
              <AccordionItem title="Warranty Terms" content={product.warrantyTerms} />
            </div>

          </div> {/* End of productDetails */}
        </div> {/* End of productLayout */}

      </div> {/* End of pageContainer */}
      
      {/* These components are outside the main product layout */}
      <FloatingIcons />
      <ProductFeatures />
      <RealStories />
      <FaqSection />
      <SignatureProjects />
      <DesignProcess />
      <TestimonialSection />
    </>
  );
};

export default ProductDetailPage;