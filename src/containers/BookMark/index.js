import React,{ useEffect } from "react";
import "./home-page.css";
import { useDispatch, useSelector } from "react-redux";
import CategoryBar from "../../components/CategoryBar";
import * as ActionType from "../../Actions";
import { genres, requests } from "../../Utils/requests";
import Cards from "../../components/Cards";
import Loader from "../../components/Loader";
import reducer, {initialState} from "../../Reducers";

const BookMark = (props) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const getStoriesSelector = (newsArray,noOfItem) => {
    return newsArray.splice(0,noOfItem);
  }
 
  const getGenreDataFromStore = (genre) => {
    console.log(JSON.stringify(state))
    return state[`${genre}`]
  }

// const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

console.log("BOOKMARK" + JSON.stringify(state))

  }, [state]);


  const bookmarkItemResults = getGenreDataFromStore('bookmarkItemData')
  // const businessDataResults = getGenreDataFromStore('businessData')
  // const sportsDataResults = getGenreDataFromStore('sportsData')
  // state["topNewsData"].results;
  console.log("++++BOOKMARK++++++"+JSON.stringify(state.bookmarkItemData));
  

  //let heroCardGroup = topNewsDataResults && getStoriesSelector(topNewsDataResults, 5);
  // let bannerCardData = heroCardGroup && getStoriesSelector(heroCardGroup, 1);
  // let businessCardData = businessDataResults && getStoriesSelector(businessDataResults, 3);
  // let sportsCardData = sportsDataResults && getStoriesSelector(sportsDataResults, 8);

  return (
    <div className="page-container">
     <CategoryBar title = {"All Bookmark"} isRightPane = {false}/>
        <div className="common-card">
          {bookmarkItemResults && bookmarkItemResults.map((item, index) => (
              <Cards key = {index} data={item} cardType="commonCard"/> 
          ))}
        </div>
    </div>
  );
};

export default BookMark;
