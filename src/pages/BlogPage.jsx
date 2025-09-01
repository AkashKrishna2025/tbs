// src/pages/BlogPage.jsx
import React, { useState, useMemo } from 'react';
import styles from './BlogPage.module.css';
import { BLOG_POSTS } from '../Data/blogData'
import BlogCard from '../components/BlogCard/BlogCard';
import FloatingIcons from '../components/FloatingIcons/FloatingIcons';

import bannerBg from '../assets/images/blog.png'; // बैनर इमेज इम्पोर्ट करें

const filterCategories = [
  { key: 'doctors', name: 'By Doctors' },
  { key: 'moms', name: 'By Moms' },
  { key: 'dads', name: 'By Dads' },
];

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('doctors');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => post.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className={styles.blogPage}>
        <header className={styles.heroBanner} style={{ backgroundImage: `url(${bannerBg})` }}>
          <h1 className={styles.heroTitle}>Thoughts, news & information</h1>
          <p className={styles.heroSubtitle}>
            Creating a warm & inviting space for your little one to grow and thrive begins with the right furniture.
          </p>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.filterContainer}>
            {filterCategories.map(cat => (
              <button
                key={cat.key}
                className={`${styles.filterButton} ${activeFilter === cat.key ? styles.active : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className={styles.blogGrid}>
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </main>
      </div>
      <FloatingIcons />
    </>
  );
};

export default BlogPage;