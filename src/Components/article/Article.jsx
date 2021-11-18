import React from "react";
import "./article.css";
export default function Article({ img, date, title, main }) {
  const PF = process.env.REACT_APP_PUBLIC_URL;
  return (
    <div className={main ? "gtp3__article-container-main" :"gtp3__article-container"}>
      <img
        className={main ? "gtp3__article-img-main" :"gtp3__article-img"}
        src={`${PF}/asset/articles/${img}`}
        alt={`${img}`}
      />
      <div className="gtp3__article-content">
        <div className="gtp3__article-content-main">
          <h4>{date}</h4>
          <p className={main ? "gtp3__article-title-main" :"gtp3__article-title"}>{title}</p>
        </div>
        <h3>Read Full Article</h3>
      </div>
    </div>
  );
}
