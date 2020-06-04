import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <div className="footer-container" >
      <a className="footer-a"  > &copy; 2020 Kendry Soto Morales
      </a>
      <a href="tel: +57 302 4591745" className="footer-a">
        <i class="fas fa-mobile-alt"></i> +57 302 459 1745
      </a>
      <a href="mailto:kendrysotomorales@gmail.com" className="footer-a">
        <i class="fas fa-envelope-square"></i> kendrysotomorales@gmail.com
      </a>
    </div>
  )
}

export default Footer;
