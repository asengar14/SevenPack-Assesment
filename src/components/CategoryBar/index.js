import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./category-bar.css";
import { genres, requests } from "../../Utils/requests";
import * as ActionType from "../../Actions";
import bookmarkon from "../../assets/bookmarkon.svg";
import Loader from "../Loader";

const CategoryBar = (props) => {
//  const { fetchRequest, getTopNews } = props;

  const dispatch = useDispatch();
 // const state = useSelector((state) => state.topNewsData);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
   // fetchRequest(requests.search, genres.topNews);
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.search,
      serviceName: genres.topNews,
    });
  }, [dispatch]);

  //console.log("+++++++++++++" + isLoading);

  return (
    <div className="category-container">
      {isLoading && <Loader />}
      <p className="heading">Top Stories</p>
      <div className="right-pane-container">
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

      {/* {state?.results?.map(item => (<div>{item.webTitle}</div>))} */}
    </div>
  );
};

export default CategoryBar;
