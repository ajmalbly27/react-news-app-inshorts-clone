import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  const fulldate = new Date(newsItem.publishedAt);
  var date = fulldate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "data:image/jpeg;base64,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"
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short</b>
            </a>{" "}
            <span className="muted">
              {" "}
              by {newsItem.author ? newsItem.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={newsItem.url} target="__blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
