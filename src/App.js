import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerSeasonContainer from './containers/PlayerSeasonContainer'
import MainMenu from './containers/MainMenu'

function App() {
  return (
    <div className="App">
      <MainMenu />
      <PlayerSeasonContainer />
    </div>
  );
}

export default App;
