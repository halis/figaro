
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import appReducer from 'ui/reducers/index';
import Home from 'ui/components/Home';
import DataBuilder from 'ui/pages/data';
import ApiBuilder from 'ui/pages/api';
import UIBuilder from 'ui/pages/ui';
import ConnectedMenu from './components/Menu';

const rootReducer = (state, action) => appReducer(state, action);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = compose(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, reduxDevTools, middleware);
render(
  <Provider store={store}>
    <Router>
      <div>
        <ConnectedMenu />
        <Route exact path="/" component={Home} />
        <Route path="/data" component={DataBuilder} />
        <Route path="/api" component={ApiBuilder} />
        <Route path="/ui" component={UIBuilder} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('layout'),
);
