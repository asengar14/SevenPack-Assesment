import React,{ useEffect, useReducer } from "react";
import "./home-page.css";
import { useDispatch, useSelector } from "react-redux";
import CategoryBar from "../../components/CategoryBar";
import * as ActionType from "../../Actions";
import { genres, requests } from "../../Utils/requests";
import Cards from "../../components/Cards";
import Loader from "../../components/Loader";
import reducer, {initialState} from "../../Reducers";

const HomePage = (props) => {
  
  const arr = [
    { name: "aditya" },
    { name: "Anku" },
    { name: "Vikram" },
    { name: "Manish" },
    { name: "Amit" },
  ];

 
// const [state, dispatch] = useReducer(reducer, initialState);
const dispatch = useDispatch();
const state = useSelector((state) => state);

//const {isLoading, topNewsData} = state;

  useEffect(() => {
  console.log("useEffect Call")
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.search,
      serviceName: genres.topNews,
    });
  }, [dispatch]);


  const results = state.topNewsData.results;
  console.log("++++++++++"+JSON.stringify(state.topNewsData.results));
  

  let heroCardGroup = results && results.splice(0, 5);
  let bannerCardData = heroCardGroup && heroCardGroup.splice(0, 1);

  return (
    <div className="page-container">
      {state.isLoading && <Loader />}
      <CategoryBar />
      <div className="card-container">
        <div className="banner-card">
          <Cards data = {bannerCardData && bannerCardData[0]} cardType="bannerCard" />
        </div>

        <div className="common-card">
          {heroCardGroup && heroCardGroup.map((item, index) => (
              <Cards key = {index} data={item} index={index} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
