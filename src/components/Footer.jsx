import React from 'react';
import "../styles/footer.scss"
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TECHYSTAR.</h1>
        <p>@All rights reserved</p>
      </div>
      <div>
        <h5>Follow us</h5>
        <div>
            <a href="/" target={"blank"} rel="noopener noreferrer">Youtube</a>
            <a href="/" target={"blank"} rel="noopener noreferrer">Instagram</a>
            <a href="/" target={"blank"} rel="noopener noreferrer">Github</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
