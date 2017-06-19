
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import appReducer from 'ui/reducers/';
import Home from 'ui/components/Home';
import DataBuilder from 'ui/components/DataBuilder';
import ApiBuilder from 'ui/components/ApiBuilder';
import UIBuilder from 'ui/components/UIBuilder';
import ConnectedMenu from './components/Menu';
import CreateEntity from './components/DataBuilder/CreateEntity';
import EditEntity from './components/DataBuilder/EditEntity';

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
        <Route path="/data-builder" component={DataBuilder} />
        <Route path="/api-builder" component={ApiBuilder} />
        <Route path="/ui-builder" component={UIBuilder} />
        <Route path="/create-entity" component={CreateEntity} />
        <Route path="/edit-entity/:entityName" component={EditEntity} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('layout'),
);
