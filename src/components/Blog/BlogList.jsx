import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';


import img1 from '../../assets/BlogImage1.png';
import img2 from '../../assets/BlogImage2.png';
import arrowUpRightOrange from '../../assets/ArrowUpRightOrange.png';
import img3 from '../../assets/CustomRobotHero.png';
import img4 from '../../assets/WeldingRobot1.png';
import img5 from '../../assets/WeldingRobot2.png';
import img6 from '../../assets/ApproachWorker.png';

export default function BlogList() {
  const blogPosts = [
    {
      id: 1,
      image: img1,
      title: 'Sustainable Practices Reducing Waste in Industrial Production',
      titleWidth: '388.45px',
      slug: '/blog/sustainable-practices'
    },
    {
      id: 2,
      image: img2,
      title: 'Advanced Robotics Revolutionizing Industrial Workflows',
      titleWidth: '336.22px',
      slug: '/blog/advanced-robotics'
    },
    {
      id: 3,
      image: img3,
      title: 'Top Benefits of the Robotics in Manufacturing',
      titleWidth: '290.47px',
      slug: '/blog/top-benefits-robotics'
    },
    {
      id: 4,
      image: img4,
      title: 'Leveraging Data Analytics for Smarter Production',
      titleWidth: '360.03px',
      slug: '/blog/data-analytics-production'
    },
    {
      id: 5,
      image: img5,
      title: 'Reducing Operational Costs Through Automation',
      titleWidth: '352.20px',
      slug: '/blog/reducing-operational-costs'
    },
    {
      id: 6,
      image: img6,
      title: 'The Advantages of Customized Manufacturing Solutions',
      titleWidth: '296.39px',
      slug: '/blog/customized-manufacturing-solutions'
    }
  ];

  return (
    <section className="blog-list-section">
      <div className="blog-list-container">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            
            <div className="blog-card-image-wrap">
              <img src={post.image} alt={post.title} className="blog-card-img" />
            </div>

            <div className="blog-card-content-wrap">
              <h2 className="blog-card-title" style={{ maxWidth: post.titleWidth }}>
                <Link to={post.slug}>{post.title}</Link>
              </h2>
            </div>

            <Link to={post.slug} className="blog-card-readmore">
              <span className="readmore-text">Read More</span>
              <img src={arrowUpRightOrange} alt="arrow" className="readmore-arrow" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}