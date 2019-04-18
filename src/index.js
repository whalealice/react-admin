import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { HashRouter,BrowserRouter as Router, Route, Switch, hashHistory } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './Redux/index';
import routes from './router'

import Login from './components/Login';
import Home from './components/Home.jsx';
import Table2 from './components/Table2.jsx';

const store = createStore(reducer)
window._store_ = store

const BasicRoute = () => (
    <Provider store={store}>
        <Router>
            <Switch>
              {routes.map((route,index)  => (
                   <Route
                   key={index}
                   path={route.path}
                   component={route.component}
                 />  
                ))}
            </Switch>
        </Router>
    </Provider>
);
ReactDOM.render(<BasicRoute/>, document.getElementById('app')) 