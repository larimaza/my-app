import {setMatch} from '../actions';
import state from '../state';
import reducer from  '../reducer';

describe ("state", () => {
  describe ("when lighting a match", () => {
    it ("returns true", () => {
      const action = setMatch(true);
      const newState = reducer(state, action);
      
      expect (newState).toEqual({
        isMatchLit: true,
        matchCount: 11
      });
    })
  });

  describe ("when putting a match out", () => {
    it ("returns false", () => {
      const action = setMatch(false);
      const newState = reducer(state, action);
      
      expect (newState).toEqual({
        isMatchLit: false,
        matchCount: 12
      });
    })
  })

  describe ("when lighting a new match", () => {
    it ("subtracts 1 from match count", () => {
      const action = setMatch(true);
      const newState = reducer(state, action);
      
      expect (newState).toEqual({
        isMatchLit: true,
        matchCount: 11
      });
    })
  })

  describe ("when trying to lit more than 1 match at the same time", () => {
    it ("ignores the command", () => {
      const action = setMatch(true);
      const firstState = reducer(state, action);
      const actualState = reducer(firstState, action);
      
      expect (actualState).toEqual({
        isMatchLit: true,
        matchCount: 11
      });
    })
  })
})
