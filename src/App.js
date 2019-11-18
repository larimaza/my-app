import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import state from "./state";
import { gameViewContainer, weatherControllerContainer } from "./container";
import GameView from "./components/GameView";
import WeatherController from "./components/WeatherController";

const SmartGameView = gameViewContainer(GameView);
const SmartWeatherController = weatherControllerContainer(WeatherController);

const App = () => (
  <Provider store={state}>
    <SmartGameView />
    <SmartWeatherController />
  </Provider>
);

export default App;
