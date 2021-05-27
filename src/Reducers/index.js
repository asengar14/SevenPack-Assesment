import * as ActionType from "../Actions";
import { genres } from "../Utils/requests";

export const initialState = {
  topNewsData: {},
  businessData: {},
  sportsData: {},
  singleItemData: {},
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
        //console.log("REDUCER CALL business" + JSON.stringify(action.result));
        return {
          ...state,
          businessData: action.result,
          isLoading : false
        };
      } else if (action.requestInfo === genres.sports) {
        //console.log("REDUCER CALL sport" + JSON.stringify(action.result));
        return {
          ...state,
          sportsData: action.result,
          isLoading : false
        };
      } else if (action.requestInfo === genres.singleItem) {
        //console.log("REDUCER CALL single Item" + JSON.stringify(action.result));
        return {
          ...state,
          singleItemData: action.result,
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
