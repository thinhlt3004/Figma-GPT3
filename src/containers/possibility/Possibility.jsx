import React from "react";
import "./posibility.css";
export default function Possibility() {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className="gpt3__posibility">
      <div className="gpt3__posibility-left">
        <img
          height="607.53px"
          width="546px"
          src={`${PF}/asset/FeatureImage.png`}
          alt="FeatureImage"
        />
      </div>
      <div className="gpt3__posibility-right">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
