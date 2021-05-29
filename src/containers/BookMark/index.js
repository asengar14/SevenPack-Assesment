import React from "react";
import "./bookmark.css";
import { useSelector } from "react-redux";
import CategoryBar from "../../components/CategoryBar";
import Cards from "../../components/Cards";

const BookMark = (props) => {

  const state = useSelector((state) => state);

  const getBookmarkDataFromStore = (genre) => {
    return state[`${genre}`]
  }

  const bookmarkItemResults = getBookmarkDataFromStore('bookmarkItemData');

  return (
    <div className="page-container">
     <CategoryBar title = {"All Bookmark"} isRightPane = {false}/>
        <div className="common-card-bookmark">
          {bookmarkItemResults && bookmarkItemResults.map((item, index) => (
              <Cards key = {index} data={item} cardType="commonCard"/> 
          ))}
        </div>
    </div>
  );
};

export default BookMark;
