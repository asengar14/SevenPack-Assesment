/**
 * Home page Component
 */

import React,{ useState, useEffect } from "react";
import "./home-page.css";
import { useDispatch, useSelector } from "react-redux";
import CategoryBar from "../../components/CategoryBar";
import * as ActionType from "../../Actions";
import { genres, requests } from "../../Utils/requests";
import Cards from "../../components/Cards";

const HomePage = () => {

// returns number of Stories from the Story Array
const getStoriesSelector = (newsArray,noOfItem) => {
  return newsArray.splice(0,noOfItem);
}
 
// returns type of genre from the store
const getGenreDataFromStore = (genre) => {
  return state[`${genre}`].results
}

const dispatch = useDispatch();
const state = useSelector((state) => state);
const [filterType, setFilterType] = useState('newest')

  useEffect(() => {
    const getNewsGenre = (fetchTypeRequest, serviceName) => {
      dispatch({
        type: ActionType.FETCH_ACTION,
        fetchTypeRequest: fetchTypeRequest,
        serviceName: serviceName,
      });
    }

  // // Top News API Call to work with Dropdown filter
  //  getNewsGenre(requests.orderByGenre(filterType, genres.topNews), genres.topNews);

  // Top News API Call   
  getNewsGenre(requests.search, genres.topNews)
  
  // Business New API Call  
  getNewsGenre(requests.business, genres.business)
  
  // Sports News API Call  
  getNewsGenre(requests.sports, genres.sports)
  }, [filterType, dispatch]);

  const getFilterType = async (filterType) => {
    console.log(filterType)
    await setFilterType(filterType)
  }

  const topNewsDataResults = getGenreDataFromStore('topNewsData')
  const businessDataResults = getGenreDataFromStore('businessData')
  const sportsDataResults = getGenreDataFromStore('sportsData')

  let heroCardGroup = topNewsDataResults && getStoriesSelector(topNewsDataResults, 5);
  let bannerCardData = heroCardGroup && getStoriesSelector(heroCardGroup, 1);
  let businessCardData = businessDataResults && getStoriesSelector(businessDataResults, 3);
  let sportsCardData = sportsDataResults && getStoriesSelector(sportsDataResults, 3);

  return (
    <div className="page-container">
      <CategoryBar title = {"Top Stories"} isRightPane = {true} filterType = {getFilterType}/>
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

        <CategoryBar title = {"Sports"} isRightPane = {false} subHeading = {true}/>
        <div className="common-card">
          {sportsCardData && sportsCardData.map((item, index) => (
              <Cards key = {index} data={item} cardType="commonCard" index = {index}/> 
          ))}
        </div>
    </div>
  );
};

export default React.memo(HomePage);
