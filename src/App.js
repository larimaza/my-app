import React from 'react';
import {Provider, connect} from 'react-redux';
import './App.css';
import state from './state';
import {getMatches} from './state/actions';

const MatchDisplayCount = ({matchCount}) => (
  <p>{matchCount}</p>
)

const MatchState = connect(state => ({matchCount: state.matchCount}), {getMatches})(MatchDisplayCount)

const App = ({matchCount, getMatches}) => (
  <Provider store={state}>
    <div className="App">
      <MatchState/>
      <button onClick={() => getMatches(5)}>Get matches</button>
    </div>
  </Provider>
)

export default App;
