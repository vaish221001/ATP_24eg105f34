import React from 'react';
import './index.css';
import product1 from './assets/product-1.jpg';
import product2 from './assets/product-2.jpg';
import product3 from './assets/product-3.jpg';
import product4 from './assets/product-4.jpg';
import product5 from './assets/product-5.jpg';
import product6 from './assets/product-6.jpg';

const productsData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: product1,
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing",
    category: "men's clothing",
    image: product2,
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
    category: "men's clothing",
    image: product3,
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice.",
    category: "men's clothing",
    image: product4,
    rating: { rate: 2.1, count: 430 }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon",
    category: "jewelery",
    image: product5,
    rating: { rate: 4.6, count: 400 }
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: product6,
    rating: { rate: 3.9, count: 70 }
  }
];

// Product Component showing Props reusability
const Product = ({ image, name, brand, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
          <img 
            src={image} 
            alt={name} 
            className="product-image" 
          />
      </div>
      <div className="product-info">
        <h2 className="product-title">{name}</h2>
        <p className="product-category">{brand}</p>
        <div className="product-footer">
          <p className="product-price">${price}</p>
          <button className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // Utilizing state and props conceptually, slicing the first 6 items for the grid
  const displayedProducts = productsData.slice(0, 6);

  return (
    <div className="container">
      <h1 className="header-title">Product Grid</h1>
      
      <div className="product-grid">
        {displayedProducts.map(product => (
          <div key={product.id} className="product-wrapper">
            <Product 
              image={product.image} 
              name={product.title} 
              brand={product.category} 
              price={product.price} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
