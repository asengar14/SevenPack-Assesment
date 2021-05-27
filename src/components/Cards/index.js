import React from "react";
import "./cards.css";
import { useHistory, useParams } from "react-router-dom";

const Cards = ({ data, index, cardType, match }) => {
  let card = null;

  const history = useHistory();
  
  const handleClickCard = () => {
     console.log("PARAMS"+JSON.stringify(data.id))
     history.push(`/${data.id}`)

  }

  if (cardType === "bannerCard") {
    // Main Card with Image
    card = (
      <div className="main-card-content">
        {/* {data.name} */}
        <div className="main-card-text-content">
          <p className="main-card-text-heading">{data && data.webTitle}</p>
          <p className="main-card-text-link">{data && data.webUrl}</p>
        </div>
      </div>
    );
  } else if (cardType === "sideCard" && (index === 2 || index === 3)) {
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
          <p className="common-card-text-link">{data && data.webUrl}</p>
        </div>
      </div>
    );
  }

  return (
    <div onClick = {() => {handleClickCard()}}>{card}</div>
  );
};

export default Cards;
