import {SET_MATCH} from './types';
import initialState from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCH:
      return {
        ...state,
        isMatchLit: action.payload
      }

    default:
      return state
  }
}
