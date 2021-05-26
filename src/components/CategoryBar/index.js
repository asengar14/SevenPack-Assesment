import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./category-bar.css";
import { genres, requests } from "../../Utils/requests";
import * as ActionType from "../../Actions";
import bookmarkon from "../../assets/bookmarkon.svg";
import Loader from "../Loader";

const CategoryBar = (props) => {

  const {title, isRightPane } = props;
  useEffect(() => {
    console.log("Category Bar")
  }, []);

  return (
    <div className="category-container">
      <p className="heading">{title}</p>
      {isRightPane && <div className="right-pane-container">
        <div className="bookmark">
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
