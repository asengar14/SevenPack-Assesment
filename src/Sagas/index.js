import { takeEvery, put } from "redux-saga/effects";
import * as ActionType from "../Actions";
import axios from "../Utils/axios";

function* fetchAction(payload) {

  yield put({type: ActionType.FETCH_PENDING})

  const result = yield axios.get(
    payload.fetchTypeRequest
  );

  if (result) {
    yield put({
      type: ActionType.FETCH_SUCCESS,
      result: result.data.response,
      requestInfo: payload.serviceName,
    });
  } else {
    yield put({
      type: ActionType.FETCH_FAILED,
      result: "Sometime went wrong",
      requestInfo: payload.serviceName,
    });
  }
}

function* sagas() {
  yield takeEvery(ActionType.FETCH_ACTION, fetchAction);
}

export default sagas;
