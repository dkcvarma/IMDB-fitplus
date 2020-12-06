import { getSearchData, getDetails } from './search-saga';
import { GET_SEARCH_DATA, GET_DETAILS } from "../actions/types";
import { takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeEvery(GET_SEARCH_DATA, getSearchData);
  yield takeEvery(GET_DETAILS, getDetails);
}
