import React, { useEffect } from "react";
import "./bookmark-button.css";
import bookmarkon from "../../assets/bookmarkon.svg";
import { useHistory } from "react-router-dom";

const BookmarkButton = (props) => {

  const { title, handleClickBookmark } = props;

  const history = useHistory();

  useEffect(() => {
    console.log("Category Bar")
  }, []);

  return (
        <div className="bookmark" onClick = {handleClickBookmark}>
          <img className = "bookmark-icon" src={bookmarkon} alt="Book mark icon" />
          {title}
        </div>
      
  );
};

export default BookmarkButton;
