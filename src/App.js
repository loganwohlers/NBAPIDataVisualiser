import React from 'react';
import './App.css';
import PlayerSeasonContainer from './containers/PlayerSeasonContainer'
import MainMenu from './containers/MainMenu'
import GamesContainer from './containers/GamesContainer';

{/* <PlayerSeasonContainer /> */ }
function App() {
  return (
    <div className="App">
      <GamesContainer />
    </div>
  );
}

export default App;
