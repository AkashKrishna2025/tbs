// src/components/BlogCard/BlogCard.jsx
import React from 'react';
import styles from './BlogCard.module.css';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={post.image} alt={post.title} />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <h3 className={styles.title}>{post.title}</h3>
          <span className={styles.readTime}>{post.readTime}</span>
        </div>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <Link to="#" className={styles.readMore}>Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;