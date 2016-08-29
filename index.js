import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';

import App from './App';
import Todo from './Todo';
import Another from './Another';

const store = createStore(reducers);
const container = document.getElementById('container');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Todo} />
        <Route path="another/:id" component={Another} />
      </Route>
    </Router>
  </Provider>,
  container
);
