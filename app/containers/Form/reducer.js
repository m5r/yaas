/*
 *
 * Form reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_URL } from './constants';

const initialState = fromJS({
  url: '',
});

function formReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_URL:
      return state
        .set('url', action.url);
    default:
      return state;
  }
}

export default formReducer;
