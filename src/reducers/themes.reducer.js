// libs
import  { pathOr } from 'ramda';
// src
import * as AppActionTypes from '../actions';

const defaultState = {
  all: [],
  popular: [],
  latest: []
};

function themes(state = defaultState, action = {}) {
  const { type, data } = action;

  switch (type) {
    case AppActionTypes.FETCH_THEME_LIST_SUCCESS:
      return { ...state, all: pathOr([],['data', 'themes'], data) };
    case AppActionTypes.FETCH_POPULAR_THEME_LIST_SUCCESS:
        return { ...state, popular: pathOr([],['data', 'themes'], data) };
    case AppActionTypes.FETCH_LATEST_THEME_LIST_SUCCESS:
      return { ...state, latest: pathOr([],['data', 'themes'], data) };
    default:
      return state;
  }
}

export default themes;
