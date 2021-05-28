import * as ActionType from "../Actions";
import { genres } from "../Utils/requests";

export const initialState = {
  topNewsData: {},
  businessData: {},
  sportsData: {},
  singleItemData: {},
  bookmarkItemData: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_SUCCESS: {
      if (action.requestInfo === genres.topNews) {
        // console.log("REDUCER CALL top news Data" + JSON.stringify(action.result));
        return {
          ...state,
          topNewsData: action.result,
          isLoading: false,
        };
      } else if (action.requestInfo === genres.business) {
        //console.log("REDUCER CALL business" + JSON.stringify(action.result));
        return {
          ...state,
          businessData: action.result,
          isLoading: false,
        };
      } else if (action.requestInfo === genres.sports) {
        //console.log("REDUCER CALL sport" + JSON.stringify(action.result));
        return {
          ...state,
          sportsData: action.result,
          isLoading: false,
        };
      } else if (action.requestInfo === genres.singleItem) {
        //console.log("REDUCER CALL single Item" + JSON.stringify(action.result));
        return {
          ...state,
          singleItemData: action.result,
          isLoading: false,
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
        isLoading: true,
      };
    }
    case ActionType.BOOKMARK_ADD_ITEM: {
      // let tempBookmarkItemData = {...state,bookmarkItemData}
      // tempBookmarkItemData.push(action.bookmarkPayload)
      return {
        ...state,
        bookmarkItemData: [...state.bookmarkItemData, action.bookmarkPayload],
        // bookmarkItemData: state.bookmarkItemData.concat(action.bookmarkPayload),
      };
    }
    case ActionType.BOOKMARK_REMOVE_ITEM: {
      // let tempBookmarkItemData = {...state,bookmarkItemData}
      // tempBookmarkItemData.push(action.bookmarkPayload)
      return {
        ...state,
        bookmarkItemData: state.bookmarkItemData.filter(item => action.bookmarkPayload !== item)
      };
    }
    default:
      return initialState;
  }
};

export default reducer;
