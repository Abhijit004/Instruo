import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <header className="header">
          <h1 className="title">Past Moments</h1>
          <p className="description">
            From coding marathons and electrifying workshops to dazzling project
            demos and brainstorming sessions, our techfest was, is, and forever
            is a whirlwind of innovation, creativity, and collaboration — here’s
            a glimpse of the unforgettable moments!
          </p>
        </header>
        <div className="gallery-img">
          <img src="/assets/Home/gallery.webp" alt="Gallery Image" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
