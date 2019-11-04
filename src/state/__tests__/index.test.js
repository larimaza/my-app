import { setMatch, getMatches } from "../actions";
import state from "../state";
import reducer from "../reducer";

describe("state", () => {
  describe("setMatch", () => {
    describe("when lighting a match", () => {
      it("returns true", () => {
        const action = setMatch(true);
        const newState = reducer(state, action);

        expect(newState).toEqual({
          isMatchLit: true,
          matchCount: 11
        });
      });
    });

    describe("when putting a match out", () => {
      it("returns false", () => {
        const action = setMatch(false);
        const newState = reducer(state, action);

        expect(newState).toEqual({
          isMatchLit: false,
          matchCount: 12
        });
      });
    });

    describe("when lighting a new match", () => {
      it("subtracts 1 from match count", () => {
        const action = setMatch(true);
        const newState = reducer(state, action);

        expect(newState).toEqual({
          isMatchLit: true,
          matchCount: 11
        });
      });
    });

    describe("when trying to light more than 1 match at the same time", () => {
      it("ignores the command", () => {
        const action = setMatch(true);
        const firstState = reducer(state, action);
        const actualState = reducer(firstState, action);

        expect(actualState).toEqual({
          isMatchLit: true,
          matchCount: 11
        });
      });
    });

    describe("when trying to light a match but there's no more matches left at all", () => {
      it("ignores the command", () => {
        const action = setMatch(true);
        const newState = reducer({ ...state, matchCount: 0 }, action);

        expect(newState).toEqual({
          isMatchLit: false,
          matchCount: 0
        });
      });
    });

    describe("when trying to light a match, but there's no more matches left except for the last one that's lit", () => {
      it("ignores the command", () => {
        const action = setMatch(true);
        const newState = reducer({ isMatchLit: true, matchCount: 0 }, action);

        expect(newState).toEqual({
          isMatchLit: true,
          matchCount: 0
        });
      });
    });
  });

  describe ("getMatches", () => {
    describe ("when adding new matches to matchbox", () => {
      it("sums the number of new matches to the current count", () => {
        const action = getMatches(5);
        const newState = reducer(state, action);

        expect(newState).toEqual({
          ...state,
          matchCount: 17
        })
      })
    })

    describe ("when adding new matches that overmatch matchbox capacity", () => {
      it("adds to the current count up to the limit and discards the rest", () => {
        const action = getMatches(10);
        const newState = reducer(state, action);

        expect(newState).toEqual({
          ...state,
          matchCount: 20
        })
      })
    })
  })
});
