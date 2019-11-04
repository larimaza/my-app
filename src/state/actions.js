import {SET_MATCH, GET_MATCHES} from './types';

export const setMatch = (payload) => ({
  type: SET_MATCH,
  payload
});

export const getMatches = (payload) => ({
  type: GET_MATCHES,
  payload
})