// libs
import  { pathOr } from 'ramda';
// src
import * as AppActionTypes from '../actions';

const defaultState = {
  categories: []
};

function app(state = defaultState, action = {}) {
  const { type, data } = action;

  switch (type) {
    case AppActionTypes.FETCH_THEME_CATEGORIES_LIST_SUCCESS:
      return { ...state, categories: pathOr([],['data', 'categories'], data) };
    default:
      return state;
  }
}

export default app;
