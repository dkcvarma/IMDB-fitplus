import { put, call } from 'redux-saga/effects';
import { getSearchResults, getDetails as fetchDetails } from  '../api/search';
import { updateSearchResults, updateLoadMore, updateLoader, updateDetails } from '../actions';

export const getSearchData = function*(action) {
  try {
    yield put(updateLoadMore(false));
    yield put(updateDetails({}));
    if(action.page === 1) {
      yield put(updateSearchResults([], true));
    }
    yield put(updateLoader(true));
    const searchResults = yield call(getSearchResults, action.query, action.page);
    if(searchResults && searchResults.Search && searchResults.Search.length > 0) {
      yield put(updateSearchResults(searchResults.Search));
      yield put(updateLoadMore(true));
    }
    yield put(updateLoader(false));
  } catch (error) {
    yield put(updateLoader(false));
    yield put(updateLoadMore(false));
    yield put(updateSearchResults([]));
  }
};

export const getDetails = function*(action) {
  try {
    yield put(updateLoadMore(false));
    yield put(updateSearchResults([], true));
    yield put(updateDetails({}));
    yield put(updateLoader(true));
    const details = yield call(fetchDetails, action.title, action.searchType);
    if(details && details.Title) {
      yield put(updateDetails(details));
    }
    yield put(updateLoader(false));
  } catch (error) {
    yield put(updateLoader(false));
    yield put(updateLoadMore(false));
    yield put(updateSearchResults([], true));
  }
};
