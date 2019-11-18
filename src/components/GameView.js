import React from "react";

const GameView = ({ matchCount, getMatches, isMatchLit, setMatch }) => (
  <div className="App">
    <p>Your match is {isMatchLit ? "lit" : "not lit"}.</p>
    <p>You have {matchCount} matches.</p>
    <button onClick={() => getMatches(5)}>Get matches</button>
    {isMatchLit ? (
      <button onClick={() => setMatch(false)}>Put out match</button>
    ) : (
      <button onClick={() => setMatch(true)}>Light one match</button>
    )}
  </div>
);

export default GameView;
