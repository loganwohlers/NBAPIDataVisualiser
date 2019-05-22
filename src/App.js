import React from 'react';
import './App.css';
import MainMenu from './containers/MainMenu'
import PlayerSeasonContainer from './containers/PlayerSeasonContainer'
import GamesContainer from './containers/GamesContainer'
import GameBoxScore from './containers/GameBoxScore'
import SeasonLanding from './containers/SeasonLanding'
import PlayerDisplay from './components/PlayerDisplay'

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        </div>

        <Route path="/" exact={true} component={MainMenu} />
        <Route path="/seasonhome/:year" component={SeasonLanding} />
        <Route path="/seasonavgs/:year" component={PlayerSeasonContainer} />
        <Route path="/games/:year" component={GamesContainer} />
        <Route path="/gamebox" component={GameBoxScore} />
        <Route path="/playerseason" component={PlayerDisplay} />

      </Router>
    )
  }
}

export default withRouter(App);


