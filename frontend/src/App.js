import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div class="brand">
          <button onclick="openMenu()">
            &#9776;
          </button>
          <a href="index.html">amazona</a>
        </div>
        <div class="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button class="sidebar-close" onclick="closeMenu()">x</button>
        <ul>
          <li><a href="index.html">Balls</a></li>
          <li><a href="index.html">Chewing toys</a></li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="./images/d1.jpg" alt="product"></img>
                <div className="product-name">
                  <a href="product.html">Ball dog toy</a>
                </div>
                <div className="product-brand">Toyz Space</div>
                <div className="product-price">$6</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./images/d1.jpg" alt="product"></img>
                <div className="product-name">
                  <a href="product.html">Ball dog toy</a>
                </div>
                <div className="product-brand">Toyz Space</div>
                <div className="product-price">$6</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./images/d1.jpg" alt="product"></img>
                <div className="product-name">
                  <a href="product.html">Ball dog toy</a>
                </div>
                <div className="product-brand">Toyz Space</div>
                <div className="product-price">$6</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./images/d1.jpg" alt="product"></img>
                <div className="product-name">
                  <a href="product.html">Ball dog toy</a>
                </div>
                <div className="product-brand">Toyz Space</div>
                <div className="product-price">$6</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product"></img>
                <div className="product-name">
                  <a href="product.html">Ball dog toy</a>
                </div>
                <div className="product-brand">Toyz Space</div>
                <div className="product-price">$6</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product"></img>
                <div className="product-name">
                  <a href="product.html">Ball dog toy</a>
                </div>
                <div className="product-brand">Toyz Space</div>
                <div className="product-price">$6</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product"></img>
                <div className="product-name">
                  <a href="product.html">Ball dog toy</a>
                </div>
                <div className="product-brand">Toyz Space</div>
                <div className="product-price">$6</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product"></img>
                <div className="product-name">
                  <a href="product.html">Ball dog toy</a>
                </div>
                <div className="product-brand">Toyz Space</div>
                <div className="product-price">$6</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All rights reserved.
      </footer>
    </div>
  );
}

export default App;
