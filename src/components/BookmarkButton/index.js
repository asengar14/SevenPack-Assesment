import React from "react";
import "./bookmark-button.css";
import bookmarkon from "../../assets/bookmarkon.svg";

const BookmarkButton = (props) => {

  const { title, handleClickBookmark } = props;

  return (
        <div className="bookmark" onClick = {handleClickBookmark}>
          <img className = "bookmark-icon" src={bookmarkon} alt="Book mark icon" />
          {title}
        </div>
      
  );
};

export default BookmarkButton;
