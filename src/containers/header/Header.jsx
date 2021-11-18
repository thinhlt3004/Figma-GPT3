import React from "react";
import "./header.css";
export default function Header() {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content-input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gtp3__header-content-people">
          <img src={`${PF}/asset/people.png`} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gtp3__header-image">
        <img src={`${PF}/asset/HeaderIllustration.png`} alt="AI" />
      </div>
    </div>
  );
}
