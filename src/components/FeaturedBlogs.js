// src/components/FeaturedBlogs.js

import React from "react";
import "./../styles/featuredBlogs.css";

const FeaturedBlogs = ({ blogs }) => {
  return (
    <section id="featured-blogs" className="featured-blogs-section">
      <h2 className="section-title">Featured Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
