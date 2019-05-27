import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducers)

//wrap app in provider. get rid of this router trash

ReactDOM.render(
    <Router>
        <Route path="" component={App} />
    </Router>,
    document.getElementById('root')
);
