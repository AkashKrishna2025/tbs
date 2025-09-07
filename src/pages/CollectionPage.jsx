// src/pages/CollectionPage.jsx (Updated with wrappers for custom arrows)
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../Data/products';
import styles from './CollectionPage.module.css';
import ProductCard from '../components/ProductCard/ProductCard';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';
import bannerBg from '../assets/images/collection-bg.png';
import DesignProcess from '../components/DesignProcess/DesignProcess';
import CTAsection from '../components/CTASection/CTASection';

const CollectionPage = () => {
  const { categoryId } = useParams();
  const [filters, setFilters] = useState({
    color: 'all',
    finish: 'all',
    size: 'all',
    priceRange: 'all',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const currentCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const categoryProducts = PRODUCTS.filter(p => p.categoryId === categoryId);

  const priceRanges = [
    { label: 'Prices', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200-max' },
  ];

  useEffect(() => {
    let products = [...categoryProducts];
    if (filters.color !== 'all') {
      products = products.filter(p => p.color === filters.color);
    }
    if (filters.finish !== 'all') {
      products = products.filter(p => p.finish === filters.finish);
    }
    if (filters.size !== 'all') {
      products = products.filter(p => p.size === filters.size);
    }
    if (filters.priceRange !== 'all') {
      products = products.filter(p => {
        const [minStr, maxStr] = filters.priceRange.split('-');
        const min = parseInt(minStr);
        const max = maxStr === 'max' ? Infinity : parseInt(maxStr);
        return p.price >= min && p.price < max;
      });
    }
    switch (sortBy) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'featured':
      default:
        products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    setFilteredProducts(products);
  }, [categoryId, filters, sortBy, categoryProducts]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const getUniqueOptions = (key) => {
    return [...new Set(categoryProducts.map(p => p[key]).filter(Boolean))].sort();
  };

  const colorOptions = getUniqueOptions('color');
  const finishOptions = getUniqueOptions('finish');
  const sizeOptions = getUniqueOptions('size');

  if (!currentCategory) return <div>Category not found!</div>;

  const bannerStyle = { backgroundImage: `url(${bannerBg})` };

  return (
    <>
      <div className={styles.collectionPage}>
        <div className={styles.banner} style={bannerStyle}>
          <h1>{currentCategory.name}</h1>
          <p>Created by parents in an endeavor to give the best</p>
        </div>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            Home &gt; {currentCategory.name}
          </div>
          <div className={styles.filterBar}>
            <div className={styles.leftFilters}>
              {/* Color Filter */}
              <div className={styles.selectWrapper}>
                <select name="color" value={filters.color} onChange={handleFilterChange}>
                  <option value="all">Color</option>
                  {colorOptions.map(color => <option key={color} value={color}>{color}</option>)}
                </select>
              </div>
              {/* Finish Filter */}
              <div className={styles.selectWrapper}>
                <select name="finish" value={filters.finish} onChange={handleFilterChange}>
                  <option value="all">Finish</option>
                  {finishOptions.map(finish => <option key={finish} value={finish}>{finish}</option>)}
                </select>
              </div>
              {/* Size Filter */}
              <div className={styles.selectWrapper}>
                <select name="size" value={filters.size} onChange={handleFilterChange}>
                  <option value="all">Size</option>
                  {sizeOptions.map(size => <option key={size} value={size}>{size}</option>)}
                </select>
              </div>
              {/* Price Filter */}
              <div className={styles.selectWrapper}>
                <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.rightSort}>
              <span className={styles.productCount}>
                {filteredProducts.length} Products
              </span>
              {/* Sort Dropdown */}
              <div className={styles.selectWrapper}>
                <select name="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.productGrid}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <DesignProcess />
      <CTAsection />
      <FloatingIcons />
    </>
  );
};

export default CollectionPage;