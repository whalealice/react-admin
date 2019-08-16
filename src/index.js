import React from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './Redux/index';
// import routes from './router'

import Login from './components/Login/Login';
import Home from './components/HomePage/HomePage';
import Table1 from './components/Table1';
import Table2 from './components/Table2';

const store = createStore(reducer)
window._store_ = store

const BasicRoute = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route
                    exact={true}
                    path="/"
                    render={() => <Redirect to="/home"></Redirect>}
                >
                </Route>
                <Home path="/home" component={Home}>
                    <Route path="/home/table1" component={Table1} />
                    <Route path="/home/table2" component={Table2} />
                </Home>

                <Route path="/login" component={Login} />
                {/* {routes.map((route,index)  => (
                   <Route
                   key={index}
                   path={route.path}
                   component={route.component}
                    />
                ))} */}
            </Switch>
        </Router>
    </Provider>
);
ReactDOM.render(<BasicRoute />, document.getElementById('app'))
