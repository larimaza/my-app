import { SET_MATCH, GET_MATCHES, CHANGE_WEATHER } from "./types";
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

      if (state.weather === "Rain" && action.payload) {
        return {
          ...state,
          isMatchLit: false,
          matchCount: 0
        }
      }

      if (state.matchCount > 0 && !state.isMatchLit) {
        return {
          ...state,
          isMatchLit: action.payload,
          matchCount: state.matchCount - 1
        };
      }

      return state;
    }

    case GET_MATCHES: {
      const matchboxLimit = 20;
      const newMatchCount = state.matchCount + action.payload;

      if (state.weather === "Rain" || state.weather === "Snow") {
        return {
          ...state,
          matchCount: 0
        }
      }

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

    case CHANGE_WEATHER: {
      if (action.payload === "Snow") {
        return {
          ...state,
          isMatchLit: false,
          matchCount: 0,
          weather: action.payload
        }
      }

      if (action.payload === "Rain") {
        return {
          ...state,
          isMatchLit: false,
          weather: action.payload
        }
      } 

      return {
        ...state,
        weather: action.payload
      }
    }

    default:
      return state;
  }
};
