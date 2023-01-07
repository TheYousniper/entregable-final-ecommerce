import React from 'react';
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="copyright">© Academlo 2022</div>
      <div className="social-networks">
        <a href="https://www.instagram.com/theyousniper/">
        <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/john-lanza-472a03252/">
        <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/john.lanza.9465">
        <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
