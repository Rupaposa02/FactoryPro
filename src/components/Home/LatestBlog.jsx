import React from 'react';
import './LatestBlog.css';

import aboutLogo from '../../assets/AboutLogo.png';
import blogImg1 from '../../assets/BlogImage1.png';
import blogImg2 from '../../assets/BlogImage2.png';
import arrowIcon from '../../assets/ArrowUpRight.png';

export default function LatestBlog() {
  const blogs = [
    {
      img: blogImg1,
      title: 'Sustainable Practices Reducing Waste in Industrial Production',
      link: '#blog-1'
    },
    {
      img: blogImg2,
      title: 'Advanced Robotics Revolutionizing Industrial Workflows',
      link: '#blog-2'
    }
  ];

  return (
    <section className="latest-blog-section">
      <div className="latest-blog-container">
      
        <div className="latest-blog-header">
          <div className="latest-blog-header-left">
            <div className="latest-blog-tagline">
              <img src={aboutLogo} alt="badge" className="latest-blog-tag-icon" />
              <span>LATEST BLOG</span>
            </div>
            <h2 className="latest-blog-heading">
              <span className="heading-light">Insights from our</span>
              <br />
              <span className="heading-bold">latest blogs</span>
            </h2>
          </div>

          <div className="latest-blog-header-right">
            <p className="latest-blog-desc">
              Stay updated with the latest trends, innovations, and expert insights in the
              manufacturing and industrial sectors
            </p>
          </div>
        </div>

        <div className="latest-blog-grid">
          {blogs.map((blog, idx) => (
            <div key={idx} className="blog-card-item">
              <div className="blog-image-box">
                <img src={blog.img} alt={blog.title} className="blog-card-img" />
              </div>

              <div className="blog-bottom-content">
                <h3 className="blog-card-title">{blog.title}</h3>
                <a href={blog.link} className="blog-arrow-btn" aria-label="Read more">
                  <img src={arrowIcon} alt="arrow" className="blog-arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}