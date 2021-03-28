import { fetchAPIMiddleware } from '@helpers';

export const FETCH_THEME_LIST_SUCCESS= 'FETCH_THEME_LIST_SUCCESS';
export const FETCH_THEME_LIST_FAILURE= 'FETCH_THEME_LIST_FAILURE';
export const fetchThemeList = () =>  async(dispatch, getState) => {

  const resp = await dispatch(fetchAPIMiddleware({
    url: '/api/themes',
    method: 'GET',
    success: FETCH_THEME_LIST_SUCCESS,
    failure: FETCH_THEME_LIST_FAILURE
  }))
}

export const FETCH_POPULAR_THEME_LIST_SUCCESS= 'FETCH_POPULAR_THEME_LIST_SUCCESS';
export const FETCH_POPULAR_THEME_LIST_FAILURE= 'FETCH_POPULAR_THEME_LIST_FAILURE';
export const fetchPopularThemeList = () =>  async(dispatch, getState) => {

  const resp = await dispatch(fetchAPIMiddleware({
    url: '/api/themes?popular=true',
    method: 'GET',
    success: FETCH_POPULAR_THEME_LIST_SUCCESS,
    failure: FETCH_POPULAR_THEME_LIST_FAILURE
  }))
} 

export const FETCH_LATEST_THEME_LIST_SUCCESS= 'FETCH_LATEST_THEME_LIST_SUCCESS';
export const FETCH_LATEST_THEME_LIST_FAILURE= 'FETCH_LATEST_THEME_LIST_FAILURE';
export const fetchLatestThemeList = () =>  async(dispatch, getState) => {

  const resp = await dispatch(fetchAPIMiddleware({
    url: '/api/themes?latest=true',
    method: 'GET',
    success: FETCH_LATEST_THEME_LIST_SUCCESS,
    failure: FETCH_LATEST_THEME_LIST_FAILURE
  }))
} 