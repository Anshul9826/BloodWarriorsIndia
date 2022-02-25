import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://www.instagram.com/bloodwarriorsindiaofficial/" target="_blank" rel="noreferrer noopener">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/BloodWarriorIn1" target="_blank" rel="noreferrer noopener">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/Blood-Warriors-India-104384845523032" target="_blank" rel="noreferrer noopener">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/communities">Communities</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/sponsors">Redeem Coin</Link>
          </li>
        </ul>
        <p className="copyright">Blood Warriors India © 2022</p>
      </footer>
    </div>
  );
}

export default Footer;
