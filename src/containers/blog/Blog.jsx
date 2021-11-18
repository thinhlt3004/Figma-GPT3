import React from "react";
import "./blog.css";
import { Article } from "../../Components";
export default function Blog() {
  const data = [
    {
      img: "img1.png",
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
    {
      img: "img2.png",
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
    {
      img: "img3.png",
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
    {
      img: "img4.png",
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
    {
      img: "img5.png",
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
  ];
  return (
    <div className="gpt3__blog-container">
      <h1 className="gradient__text gpt3__blog-title">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="gpt3__blog-article-container">
        <div className="gpt3__blog-article-left">
          <Article
            img={data[0].img}
            date={data[0].date}
            title={data[0].title}
            main
          />
        </div>
        <div className="gpt3__blog-article-right">
          {data.map((i, index) => (
            index > 0  && <Article img={i.img} date={i.date} title={i.title} key={index} />       
          ))}
        </div>
      </div>
    </div>
  );
}
