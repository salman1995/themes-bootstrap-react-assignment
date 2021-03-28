import { fetchAPIMiddleware } from '@helpers';

export const FETCH_THEME_CATEGORIES_LIST_SUCCESS= 'FETCH_THEME_CATEGORIES_LIST_SUCCESS';
export const FETCH_THEME_CATEGORIES_LIST_FAILURE= 'FETCH_THEME_CATEGORIES_LIST_FAILURE';
export const fetchThemeCategories = () =>  async(dispatch, getState) => {

  const resp = await dispatch(fetchAPIMiddleware({
    url: '/api/categories',
    method: 'GET',
    success: FETCH_THEME_CATEGORIES_LIST_SUCCESS,
    failure: FETCH_THEME_CATEGORIES_LIST_FAILURE
  }))
} 