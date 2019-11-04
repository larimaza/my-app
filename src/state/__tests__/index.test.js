import { setMatch, getMatches, changeWeather } from "../actions";
import state from "../state";
import reducer from "../reducer";

describe("state", () => {
  describe("setMatch", () => {
    describe("when lighting a match", () => {
      it("returns true and subtracts 1 from match count", () => {
        const action = setMatch(true);
        const newState = reducer(state, action);

        expect(newState).toEqual({
          ...state,
          isMatchLit: true,
          matchCount: 11
        });
      });
    });

    describe("when putting a match out", () => {
      it("returns false", () => {
        const lightAction = setMatch(true);
        const litState = reducer(state, lightAction);
        const putOutAction = setMatch(false);
        const outState = reducer(litState, putOutAction);

        expect(outState).toEqual({
          ...state,
          isMatchLit: false,
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
          ...state,
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
          ...state,
          isMatchLit: false,
          matchCount: 0
        });
      });
    });

    describe("when trying to light a match, but there's no more matches left except for the last one that's lit", () => {
      it("ignores the command", () => {
        const action = setMatch(true);
        const newState = reducer({
          ...state, 
          isMatchLit: true, 
          matchCount: 0 
        }, action);

        expect(newState).toEqual({
          ...state,
          isMatchLit: true,
          matchCount: 0
        });
      });
    });

    it("when trying to light a match in the rain, fails to do so and loses all matches", () => {
      const rainAction = changeWeather("Rain");
      const rainingState = reducer(state, rainAction);
      const lightAction = setMatch(true);
      const actualState = reducer(rainingState, lightAction);

      expect(actualState).toEqual({
        ...state,
        isMatchLit: false,
        matchCount: 0,
        weather: "Rain"
      })
    })
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

    describe ("when trying to get new matches in the rain", () => {
      it("loses all new matches", () => {
        const rainAction = changeWeather("Rain");
        const rainingState = reducer(state, rainAction);
        const getMatchesAction = getMatches(10);
        const actualState = reducer(rainingState, getMatchesAction);

        expect(actualState).toEqual({
          ...state,
          matchCount: 0,
          isMatchLit: false,
          weather: "Rain"
        })
      })
    })

    describe ("when trying to get new matches in the snow", () => {
      it("loses all new matches", () => {
        const snowAction = changeWeather("Snow");
        const snowingState = reducer(state, snowAction);
        const getMatchesAction = getMatches(10);
        const actualState = reducer(snowingState, getMatchesAction);

        expect(actualState).toEqual({
          ...state,
          matchCount: 0,
          isMatchLit: false,
          weather: "Snow"
        })
      })
    })
  })

  describe("changeWeather", () => {
    it("changes the current weather to a given weather type", () => {
      const action = changeWeather("Cloudy");
      const newState = reducer(state, action);

      expect(newState).toEqual({
        ...state,
        weather: "Cloudy"
      })
    })

    it("puts out any lit match when it's raining", () => {
      const action = changeWeather("Rain");
      const newState = reducer(state, action);

      expect(newState).toEqual({
        ...state,
        isMatchLit: false,
        weather: "Rain"
      })
    })

    it("puts out any lit match and loses all matches when it's snowing", () => {
      const lightAction = setMatch(true);
      const lightState = reducer(state, lightAction);
      const snowAction = changeWeather("Snow");
      const actualState = reducer(lightState, snowAction);

      expect(actualState).toEqual({
        ...state,
        isMatchLit: false,
        matchCount: 0,
        weather: "Snow"
      })
    })
  })
});
