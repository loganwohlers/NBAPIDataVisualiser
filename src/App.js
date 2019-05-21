import React from 'react';
import './App.css';
import MainMenu from './containers/MainMenu'
import PlayerSeasonContainer from './containers/PlayerSeasonContainer'
import GamesContainer from './containers/GamesContainer'
import GameBoxScore from './components/GameBoxScore'
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
        <Route path="/seasonavgs" component={PlayerSeasonContainer} />
        <Route path="/games" component={GamesContainer} />
        <Route path="/gamebox" component={GameBoxScore} />

      </Router>
    )
  }
}

export default withRouter(App);


