import {lightMatch} from '../actions';
import reducer from  '../reducer';

describe ("state", () => {
  describe ("when lighting a match", () => {
    it ("returns true", () => {
      const state = false;
      const action = lightMatch(true);
      const newState = reducer(state, action)
      
      expect (newState).toBe(true);
    })
  });

  describe ("when putting a match out", () => {
    it ("returns false", () => {
      const state = true;
      const action = lightMatch(false);
      const newState = reducer(state, action)
      
      expect (newState).toBe(false);
    })
  })
})