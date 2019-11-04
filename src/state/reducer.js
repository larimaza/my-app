import { SET_MATCH, GET_MATCHES } from "./types";
import initialState from "./state";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCH: {
      if (!action.payload) {
        return {
          ...state,
          isMatchLit: false
        };
      }

      if (state.matchCount > 0 && !state.isMatchLit) {
        return {
          isMatchLit: action.payload,
          matchCount: state.matchCount - 1
        };
      }

      return state;
    }

    case GET_MATCHES: {
      const matchboxLimit = 20;
      const newMatchCount = state.matchCount + action.payload;

      if (newMatchCount > matchboxLimit) {
        return {
          ...state,
          matchCount: 20
        }
      }

      return {
        ...state,
        matchCount: newMatchCount
      }
    }

    default:
      return state;
  }
};
