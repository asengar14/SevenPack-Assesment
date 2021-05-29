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
        return {
          ...state,
          topNewsData: action.result,
          isLoading: false,
        };
      } else if (action.requestInfo === genres.business) {
        return {
          ...state,
          businessData: action.result,
          isLoading: false,
        };
      } else if (action.requestInfo === genres.sports) {
        return {
          ...state,
          sportsData: action.result,
          isLoading: false,
        };
      } else if (action.requestInfo === genres.singleItem) {
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
      return {
        ...state,
        bookmarkItemData: [...state.bookmarkItemData, action.bookmarkPayload],
      };
    }
    case ActionType.BOOKMARK_REMOVE_ITEM: {
      return {
        ...state,
        bookmarkItemData: state.bookmarkItemData.filter(item => action.bookmarkPayload !== item)
      };
    }
    default:
      return state;
  }
};

export default reducer;
