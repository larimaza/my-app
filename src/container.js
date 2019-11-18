import { connect } from "react-redux";
import { getMatches, setMatch, changeWeather } from "./state/actions";

export const gameViewContainer = connect(
  state => ({ matchCount: state.matchCount, isMatchLit: state.isMatchLit }),
  { getMatches, setMatch }
);

export const weatherControllerContainer = connect(
  state => ({ weather: state.weather }),
  { changeWeather }
);
