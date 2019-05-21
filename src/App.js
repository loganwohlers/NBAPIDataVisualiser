import React from 'react';
import './App.css';
import MainMenu from './containers/MainMenu'
import PlayerSeasonContainer from './containers/PlayerSeasonContainer'
import GamesContainer from './containers/GamesContainer'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <button><Link to="/seasons">Season Stats</Link></button>
          </div>
        </div>

        <Route path="/" exact={true} component={MainMenu} />
        <Route path="/seasons" component={PlayerSeasonContainer} />
        <Route path="/games" component={GamesContainer} />

      </Router>
    )
  }
}

export default App;


