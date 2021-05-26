import React from "react";
import "./cards.css";

const Cards = ({ data, index, cardType }) => {
  let card = null;

  if (cardType === "bannerCard") {
    // Main Card with Image
    card = (
      <div className="main-card-content">
        {/* {data.name} */}
        <div className="main-card-text-content">
          <p className="main-card-text-heading">{data && data.webTitle}</p>
          <a
            href={data && data.webUrl}
            target="blank"
            className="main-card-text-link"
          >
            {data && data.webUrl}
          </a>
        </div>
      </div>
    );
  } else if (cardType === "sideCard" && index === 2 || index === 3) {
    // Side Card with No Image
    card = (
      <div className="no-image-card-content">
        <div className = "no-image-card-text-content">
          <div className="no-image-card-heading">
            {data && data.webTitle}
          </div>
        </div>
      </div>
    );
  } else if(cardType === "sideCard"){
    // Side Card with Image
    card = (
      <div className="side-card-content">
        <div className="side-card-text-content">
          <div className = "side-card-text-heading">
            {data && data.webTitle}
          </div>
        </div>
      </div>
    );
  } else if (cardType === "commonCard"){
    card = (
      <div className="common-card-content">
        {/* {data.name} */}
        <div className="common-card-text-content">
          <p className="common-card-text-heading">{data && data.webTitle}</p>
          <a
            href={data && data.webUrl}
            target="blank"
            className="common-card-text-link"
          >
            {data && data.webUrl}
          </a>
        </div>
      </div>
    );
  }

  return (
    <>{card}</>
  );
};

export default Cards;
