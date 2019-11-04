import {SET_MATCH, GET_MATCHES, CHANGE_WEATHER} from './types';

export const setMatch = (payload) => ({
  type: SET_MATCH,
  payload
});

export const getMatches = (payload) => ({
  type: GET_MATCHES,
  payload
})

export const changeWeather = (payload) => ({
  type: CHANGE_WEATHER,
  payload
})