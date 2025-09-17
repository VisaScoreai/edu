/**
 * Services component
 *
 * Service catalog displaying available SMM services
 */

import React, { useState } from "react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      name: "Instagram Followers",
      category: "instagram",
      price: 0.015,
      minOrder: 100,
      maxOrder: 10000,
      description: "High quality Instagram followers",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Instagram Likes",
      category: "instagram",
      price: 0.008,
      minOrder: 50,
      maxOrder: 5000,
      description: "Real Instagram likes for your posts",
      rating: 4.9,
    },
    {
      id: 3,
      name: "YouTube Views",
      category: "youtube",
      price: 0.005,
      minOrder: 1000,
      maxOrder: 50000,
      description: "Real YouTube views for your videos",
      rating: 4.7,
    },
    {
      id: 4,
      name: "YouTube Subscribers",
      category: "youtube",
      price: 0.025,
      minOrder: 50,
      maxOrder: 2000,
      description: "Active YouTube subscribers",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Facebook Page Likes",
      category: "facebook",
      price: 0.012,
      minOrder: 100,
      maxOrder: 5000,
      description: "Facebook page likes from real users",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Twitter Followers",
      category: "twitter",
      price: 0.018,
      minOrder: 100,
      maxOrder: 8000,
      description: "Active Twitter followers",
      rating: 4.4,
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "instagram", name: "Instagram" },
    { id: "youtube", name: "YouTube" },
    { id: "facebook", name: "Facebook" },
    { id: "twitter", name: "Twitter" },
  ];

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h1>Service Catalog</h1>
          <p>Choose from our wide range of social media marketing services</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <h3>{service.name}</h3>
                <div className="service-rating">
                  <span>★</span>
                  <span>{service.rating}</span>
                </div>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                <div className="price">
                  <span className="label">Price per unit:</span>
                  <span className="value">${service.price.toFixed(3)}</span>
                </div>
                <div className="min-order">
                  <span className="label">Min order:</span>
                  <span className="value">{service.minOrder.toLocaleString()}</span>
                </div>
                <div className="max-order">
                  <span className="label">Max order:</span>
                  <span className="value">{service.maxOrder.toLocaleString()}</span>
                </div>
              </div>
              
              <button className="order-btn">Order Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;