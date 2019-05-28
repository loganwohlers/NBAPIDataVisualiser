import React from 'react';
import './App.css';
import MainMenu from './containers/MainMenu'
import PlayerSeasonContainer from './containers/PlayerSeasonContainer'
import GamesContainer from './containers/GamesContainer'
import GameBoxScore from './containers/GameBoxScore'
import SeasonLanding from './containers/SeasonLanding'
import PlayerDisplay from './components/PlayerDisplay'

import { BrowserRouter, Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" exact={true} component={MainMenu} />
            <Route path="/seasonhome/:year" component={SeasonLanding} />
            <Route path="/seasonavgs/:year" component={PlayerSeasonContainer} />
            <Route path="/games/:year" component={GamesContainer} />
            <Route path="/gamebox/:id" component={GameBoxScore} />
            <Route path="/player/:id" component={PlayerDisplay} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;


