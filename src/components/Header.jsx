import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/main.css';

function Header() {
  return (
    <header className="main-header">
      <nav className="center-nav">
        <Link to="/" className="nav-link">
          Anasayfa
        </Link>
        <Link to="/search" className="nav-link">
          Ürün Arama
        </Link>
        <Link to="/cart" className="nav-link">
          Sepet
        </Link>
      </nav>

      <div className="right-area">
      </div>
    </header>
  );
};

export default Header;