import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
        <h2 className="title-header">
          <Link className='link-title' to="/">e-commerce</Link>
        </h2>
      <nav className="nav-header">
        <ul className="list-header">
          <li className="item-header">
            <Link className='link-header' to="/login">
              <i className="fa-regular fa-user icon-header"></i>
            </Link>
          </li>
          <li className="item-header">
            <Link to="/purchases">
              <i className="fa-solid fa-box-archive icon-header"></i>
            </Link>
          </li>
          <li className="item-header">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping icon-header"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
