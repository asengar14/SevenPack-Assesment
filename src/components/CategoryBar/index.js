import React, { useEffect } from "react";
import "./category-bar.css";
import bookmarkon from "../../assets/bookmarkon.svg";
import { useHistory } from "react-router-dom";
import BookmarkButton from "../BookmarkButton";
import { useDispatch, useSelector } from "react-redux";

const CategoryBar = (props) => {

  const {title, isRightPane, subHeading } = props;

  const state = useSelector((state) => state);
  const history = useHistory();

  const handleClickBookmark = () => {
    if(state &&  state.bookmarkItemData.length > 1){
      history.push('/bookmark')
    } else {
        alert("No Bookmark added")  
    }
  }

  return (
    <div className={ subHeading ? "sub-heading-category-container" : "category-container"}>
      <p className= {subHeading ? 'sub-heading' : "heading"} >{title}</p>
      {isRightPane && <div className="right-pane-container">
        <BookmarkButton title = {"VIEW BOOKMARK"} handleClickBookmark = {() => {handleClickBookmark()}}/>
        {/* <div className="bookmark" onClick = {() => {handleClickBookmark()}}>
          <img className = "bookmark-icon" src={bookmarkon} alt="Book mark icon" />
          VIEW BOOKMARK
        </div> */}
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

export default React.memo(CategoryBar);
