import React, { useEffect, useState } from "react";
import "./news.css";
import { useDispatch, useSelector } from "react-redux";
import * as ActionType from "../../Actions";
import { genres, requests } from "../../Utils/requests";
import { useLocation } from "react-router-dom";
import BookmarkButton from "../../components/BookmarkButton";
import moment from "moment";
import logoWhite from "../../assets/logo_white.png";

const News = (props) => {
  
  const bookmarkTemplete = () => {
    if (isBookmarClicked) {
      return { label: "ADD BOOKMARK" };
    } else {
      return { label: "REMOVE BOOKMARK" };
    }
  };

  const [isBookmarClicked, setBookmarkClicked] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const getSingleItemFromStore = (singleItem) => {
    return state[`${singleItem}`].content;
  };

  const location = useLocation();
  const singleItem = location.pathname;

  useEffect(() => {
    console.log("USEEFFECT");
    const getSingleItem = (fetchTypeRequest, serviceName) => {
      dispatch({
        type: ActionType.FETCH_ACTION,
        fetchTypeRequest: fetchTypeRequest,
        serviceName: serviceName,
      });
    };

    getSingleItem(requests.singleItem(singleItem), genres.singleItem);
  }, [dispatch, singleItem]);

  const getFormatDate = (date) => {
    return moment(date).format("ddd DD MMM YYYY h:mm");
  };

  const singleItemDataResult = getSingleItemFromStore("singleItemData");
  console.log("++++++++++" + JSON.stringify(singleItemDataResult));

  const handleClickBookmark = async () => {
    await setBookmarkClicked(!isBookmarClicked);
    console.log("ADD BOOKMARK" + isBookmarClicked);
    if (isBookmarClicked) {
      dispatch({
        type: ActionType.BOOKMARK_ADD_ITEM,
        bookmarkPayload: singleItemDataResult,
        // serviceName: serviceName,
      });
    } else {
      dispatch({
        type: ActionType.BOOKMARK_REMOVE_ITEM,
        bookmarkPayload: singleItemDataResult,
        // serviceName: serviceName,
      });
    }
  };

  const bookmarkSelector = bookmarkTemplete();

  return (
    <div className="page-container">
      <BookmarkButton
        title={bookmarkSelector.label}
        handleClickBookmark={handleClickBookmark}
      />
      <p className="publication-date">
        {singleItemDataResult &&
          getFormatDate(singleItemDataResult.webPublicationDate)}
      </p>
      <div className="news-parent-container">
        <div className="news-text-container">
          <h1>{singleItemDataResult && singleItemDataResult.webTitle}</h1>
          <hr />
          <p>For more info, Click on the link below</p>
          <a
            href={singleItemDataResult && singleItemDataResult.webUrl}
            target="blank"
          >
            {singleItemDataResult && singleItemDataResult.webUrl}
          </a>
        </div>
        <div className="image-container">
          <img src={logoWhite} alt="Response Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default News;
