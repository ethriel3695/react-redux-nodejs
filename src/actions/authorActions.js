// import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

import * as productService from '../../tools/services/productService';

export function loadAuthorsSuccess (authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors () {
  return dispatch => {
    dispatch(beginAjaxCall());
    return productService.findAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw (error);
    });
  };
}
