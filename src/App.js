import React from 'react';
import './App.css';
import MainMenu from './containers/MainMenu'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          </div>
        </div>


        <Route path="/hello" component={MainMenu} />
        <Route path="/about" component={MainMenu} />
        <Route path="/books" component={MainMenu} />

      </Router>
    )
  }
}

export default App;


