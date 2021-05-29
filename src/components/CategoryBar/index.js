/**
 * Category Bar Component
 */

import React from "react";
import "./category-bar.css";
import { useHistory } from "react-router-dom";
import BookmarkButton from "../BookmarkButton";
import { useSelector } from "react-redux";

const CategoryBar = (props) => {

  const {title, isRightPane, subHeading, filterType } = props;

  const state = useSelector((state) => state);
  const history = useHistory();

  const handleClickBookmark = () => {
    if(state &&  state.bookmarkItemData.length > 0){
      history.push('/bookmark')
    } else {
        alert("No Bookmark added")  
    }
  }

  const handleOnDropdownChange = (e) => {
    filterType(e.target.value)
  }

  return (
    <div className={ subHeading ? "sub-heading-category-container" : "category-container"}>
      <p className= {subHeading ? 'sub-heading' : "heading"} >{title}</p>
      {isRightPane && <div className="right-pane-container">
        <BookmarkButton title = {"VIEW BOOKMARK"} handleClickBookmark = {() => {handleClickBookmark()}}/>
        <div className="filter">
            <select className = "filter-dropdown" name="categories" id="categories" onChange = {handleOnDropdownChange}>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="relevance">Most popular</option>
            </select>
        </div>
      </div>
      }
    </div>
  );
};

export default CategoryBar;
