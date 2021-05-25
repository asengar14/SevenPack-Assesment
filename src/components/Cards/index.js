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
  } else if (index === 2 || index === 3) {
    card = (
      <div className="no-image-card-content">
        <div className = "no-image-card-text-content">
          <div className="no-image-card-heading">
            {data && data.webTitle}
          </div>
        </div>
      </div>
    );
  } else {
    card = (
      <div className="common-card-content">
        <div className="common-card-text-content">
          <div className = "common-card-text-heading">
            {data && data.webTitle}
          </div>
        </div>
      </div>
    );
  }

  return (
    // <div className="main-card-content">
    //   <img className="main-card-image" src={searchBanner} alt="Banner Image" />
    //   Type 1
    // </div>
    <>{card}</>
  );
};

export default Cards;
