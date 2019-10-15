import {LIGHT_MATCH} from './types';

export default (state, action) => {
  switch (action.type) {
    case LIGHT_MATCH:
      return action.payload

    default:
      return state
  }
}
