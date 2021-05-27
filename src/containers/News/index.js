import React,{ useEffect } from "react";
import "./news.css";
import { useDispatch, useSelector } from "react-redux";
import * as ActionType from "../../Actions";
import { genres, requests } from "../../Utils/requests";
import { useLocation } from "react-router-dom";
import BookmarkButton from "../../components/BookmarkButton";
import moment from "moment";

const News = (props) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  

  const getSingleItemFromStore = (singleItem) => {
    return state[`${singleItem}`].content
  }



  const location = useLocation();
  const singleItem = location.pathname;

  useEffect(() => {
    console.log("USEEFFECT")
    const getSingleItem = (fetchTypeRequest, serviceName) => {
      dispatch({
        type: ActionType.FETCH_ACTION,
        fetchTypeRequest: fetchTypeRequest,
        serviceName: serviceName,
      });
    }
    
    getSingleItem(requests.singleItem(singleItem) , genres.singleItem);
  }, [dispatch,singleItem]);

  const getFormatDate = () => {
    
  }

  const singleItemDataResult = getSingleItemFromStore('singleItemData')
  // state["topNewsData"].results;
  console.log("++++++++++"+JSON.stringify(singleItemDataResult));

  return (
    <div className="page-container">
      <BookmarkButton/>
      <p className = "publication-date">{singleItemDataResult && moment(singleItemDataResult.webPublicationDate ).format('ddd DD MMM YYYY h:mm')}</p>
    </div>
  );
};

export default News;
