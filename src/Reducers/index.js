import * as ActionType from "../Actions";
import { genres } from "../Utils/requests";

export const initialState = {
  topNewsData: {},
  businessData: {},
  sportsData: {},
  isLoading : false
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_SUCCESS: {
      if (action.requestInfo === genres.topNews) {
       // console.log("REDUCER CALL top news Data" + JSON.stringify(action.result));
        return {
          ...state,
          topNewsData: action.result,
          isLoading : false
        };
      } else if (action.requestInfo === genres.business) {
        console.log("REDUCER CALL business" + JSON.stringify(action.result));
        return {
          ...state,
          businessData: action.result,
          isLoading : false
        };
      } else if (action.requestInfo === genres.sports) {
        console.log("REDUCER CALL sport" + JSON.stringify(action.result));
        return {
          ...state,
          sportsData: action.result,
          isLoading : false
        };
      } else if (action.requestInfo === genres.comedyMovies) {
        console.log("REDUCER CALL trending" + JSON.stringify(action.result));
        return {
          ...state,
          comedyMovies: action.result,
        };
      } else if (action.requestInfo === genres.horrorMovies) {
        console.log("REDUCER CALL trending" + JSON.stringify(action.result));
        return {
          ...state,
          horrorMovies: action.result,
        };
      } else if (action.requestInfo === genres.documentryMovies) {
        console.log("REDUCER CALL trending" + JSON.stringify(action.result));
        return {
          ...state,
          documentryMovies: action.result,
        };
      } else if (action.requestInfo === genres.romanticMovies) {
        console.log("REDUCER CALL trending" + JSON.stringify(action.result));
        return {
          ...state,
          romanticMovies: action.result,
        };
      } else if (action.requestInfo === genres.trending) {
        console.log("REDUCER CALL trending" + JSON.stringify(action.result));
        return {
          ...state,
          trending: action.result,
        };
      }
      break;
    }
    case ActionType.FETCH_FAILED: {
      break;
    }
    case ActionType.FETCH_PENDING: {
      return {
        ...state,
        isLoading : true
      }
    }
    default:
      return initialState;
  }
};

export default reducer;
