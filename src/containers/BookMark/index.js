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

  const getStoriesSelector = (newsArray,noOfItem) => {
    return newsArray.splice(0,noOfItem);
  }
 
  const getGenreDataFromStore = (genre) => {
    return state[`${genre}`].results
  }

// const [state, dispatch] = useReducer(reducer, initialState);
const dispatch = useDispatch();
const state = useSelector((state) => state);

  useEffect(() => {
  //   const getNewsGenre = (fetchTypeRequest, serviceName) => {
  //     dispatch({
  //       type: ActionType.FETCH_ACTION,
  //       fetchTypeRequest: fetchTypeRequest,
  //       serviceName: serviceName,
  //     });
  //   }
    

    
  // // Top News API Call   
  // getNewsGenre(requests.search, genres.topNews)
  
  // // Business New API Call  
  // getNewsGenre(requests.business, genres.business)
  
  // // Sports News API Call  
  // getNewsGenre(requests.sports, genres.sports)




  }, [dispatch]);


  const topNewsDataResults = getGenreDataFromStore('topNewsData')
  const businessDataResults = getGenreDataFromStore('businessData')
  const sportsDataResults = getGenreDataFromStore('sportsData')
  // state["topNewsData"].results;
  console.log("++++++++++"+JSON.stringify(state.topNewsData.results));
  

  let heroCardGroup = topNewsDataResults && getStoriesSelector(topNewsDataResults, 5);
  let bannerCardData = heroCardGroup && getStoriesSelector(heroCardGroup, 1);
  let businessCardData = businessDataResults && getStoriesSelector(businessDataResults, 3);
  let sportsCardData = sportsDataResults && getStoriesSelector(sportsDataResults, 8);

  return (
    <div className="page-container">
     <CategoryBar title = {"All Bookmark"} isRightPane = {false}/>
        <div className="common-card">
          {sportsCardData && sportsCardData.map((item, index) => (
              <Cards key = {index} data={item} cardType="commonCard"/> 
          ))}
        </div>
    </div>
  );
};

export default BookMark;
