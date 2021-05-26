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
    const getNewsGenre = (fetchTypeRequest, serviceName) => {
      dispatch({
        type: ActionType.FETCH_ACTION,
        fetchTypeRequest: fetchTypeRequest,
        serviceName: serviceName,
      });
    }
    

    
  // Top News API Call   
  getNewsGenre(requests.search, genres.topNews)
  
  // Business New API Call  
  getNewsGenre(requests.business, genres.business)
  
  // Sports News API Call  
  getNewsGenre(requests.sports, genres.sports)




  }, [dispatch]);


  const topNewsDataResults = getGenreDataFromStore('topNewsData')
  const businessDataResults = getGenreDataFromStore('businessData')
  const sportsDataResults = getGenreDataFromStore('sportsData')
  // state["topNewsData"].results;
  console.log("++++++++++"+JSON.stringify(state.topNewsData.results));
  

  let heroCardGroup = topNewsDataResults && getStoriesSelector(topNewsDataResults, 5);
  let bannerCardData = heroCardGroup && getStoriesSelector(heroCardGroup, 1);
  let businessCardData = businessDataResults && getStoriesSelector(businessDataResults, 3);
  let sportsCardData = sportsDataResults && getStoriesSelector(sportsDataResults, 3);

  return (
    <div className="page-container">
      {state.isLoading && <Loader />}
      <CategoryBar title = {"Top Stories"} isRightPane = {true}/>
      <div className="card-container">
        <div className="banner-card">
          <Cards data = {bannerCardData && bannerCardData[0]} cardType="bannerCard" />
        </div>

        <div className="side-card">
          {heroCardGroup && heroCardGroup.map((item, index) => (
              <Cards key = {index} data={item} cardType="sideCard" index = {index}/> 
          ))}
        </div>
      </div>

        <div className="common-card">
          {businessCardData && businessCardData.map((item, index) => (
              <Cards key = {index} data={item} cardType="commonCard" index = {index}/> 
          ))}
        </div>

        <CategoryBar title = {"Sports"} isRightPane = {false}/>
        <div className="common-card">
          {sportsCardData && sportsCardData.map((item, index) => (
              <Cards key = {index} data={item} cardType="commonCard" index = {index}/> 
          ))}
        </div>
    </div>
  );
};

export default BookMark;
