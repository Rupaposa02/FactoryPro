import React from 'react';
import BlogHero from '../../components/Blog/BlogHero';
import BlogList from '../../components/Blog/BlogList';
import Footer from '../../components/Home/Footer'; 

export default function Blog() {
  return (
    <main className="blog-page">
      
      <BlogHero />

      <BlogList/>
      <section className="blog-content-container">
        
      </section>

      
      <Footer />
    </main>
  );
}