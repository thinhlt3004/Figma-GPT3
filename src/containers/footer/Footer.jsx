import React from "react";
import "./footer.css";
export default function Footer() {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className="gpt3__footer0-container">
      <div className="gpt3__footer-top">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer-bottom">
        <div className="gpt3__footer-left">
          <img
            className="gpt3__footer-logo"
            src={`${PF}/asset/GPT-3.png`}
            alt="logo"
          />
          <h4>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</h4>
        </div>
        <div className="gpt3__footer-right">
          <div className="gpt3__footer-menu-items">
            <span>Links</span>
            <span>Overons</span>
            <span>Social Media</span>
            <span>Counters</span>
            <span>Contact</span>
          </div>
          <div className="gpt3__footer-menu-items">
            <span>Company</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Contact</span>
          </div>
          <div className="gpt3__footer-menu-items">
            <span>Get in touch</span>
            <span>Crechterwoord K12 182 DK Alknjkcb</span>
            <span>085-132567</span>
            <span>info@payme.net</span>
          </div>
        </div>
      </div>
      <div className="gpt3__footer-end">
        <span>© 2021 GPT-3. All rights reserved.</span>
      </div>
    </div>
  );
}
