import React, { useEffect } from "react";
import "./category-bar.css";
import bookmarkon from "../../assets/bookmarkon.svg";
import { useHistory } from "react-router-dom";
import BookmarkButton from "../BookmarkButton";

const CategoryBar = (props) => {

  const {title, isRightPane } = props;

  const history = useHistory();
  
  useEffect(() => {
    console.log("Category Bar")
  }, []);


  const handleClickBookmark = () => {
    history.push('/bookmark')
  }

  return (
    <div className="category-container">
      <p className="heading">{title}</p>
      {isRightPane && <div className="right-pane-container">
        {/* <BookmarkButton/> */}
        <div className="bookmark" onClick = {() => {handleClickBookmark()}}>
          <img className = "bookmark-icon" src={bookmarkon} alt="Book mark icon" />
          VIEW BOOKMARK
        </div>
        <div className="filter">
            <select className = "filter-dropdown" name="categories" id="categories">
                <option value="newestFirst">Newest first</option>
                <option value="newestFirst">Oldest first</option>
                <option value="newestFirst">Most popular</option>
            </select>
        </div>
      </div>
      }

      {/* {state?.results?.map(item => (<div>{item.webTitle}</div>))} */}
    </div>
  );
};

export default CategoryBar;
