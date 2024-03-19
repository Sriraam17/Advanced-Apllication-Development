// import React from 'react'

import { useState } from "react";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";

function ListOfJobs() {
    const [products ] = useState([
        {
            id: 1,
            name: "Google",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 19.99,
            rating: 4.5,
            image: "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
          },
          {
            id: 2,
            name: "Amazon",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 29.99,
            rating: 4.2,
            image: "https://pngimg.com/uploads/amazon/amazon_PNG13.png",
          },
          {
            id: 3,
            name: "Mercedes",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 39.99,
            rating: 4.8,
            image: "https://tse1.mm.bing.net/th?id=OIP.VMyecfqWGnROEmIKAquZYAHaFP&pid=Api&P=0&h=180",
          },
          {
            id: 4,
            name: "Mercedes",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 39.99,
            rating: 4.8,
            image: "https://tse1.mm.bing.net/th?id=OIP.VMyecfqWGnROEmIKAquZYAHaFP&pid=Api&P=0&h=180",
          },
          {
            id: 5,
            name: "Mercedes",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 39.99,
            rating: 4.8,
            image: "https://tse1.mm.bing.net/th?id=OIP.VMyecfqWGnROEmIKAquZYAHaFP&pid=Api&P=0&h=180",
          },
          {
            id: 6,
            name: "Mercedes",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 39.99,
            rating: 4.8,
            image: "https://tse1.mm.bing.net/th?id=OIP.VMyecfqWGnROEmIKAquZYAHaFP&pid=Api&P=0&h=180",
          },
    ]);   
  return (
    <div>
      <Navbar/>
        <div className="product-page">
      <h1 className="page-title">Available Companies</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-rating">Rating: {product.rating}/5</p>
              <Link to="/applyjob">
                <button className="button">APPLY JOB</button>
              </Link>
              {/* Add any other product information here */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}


export default ListOfJobs
