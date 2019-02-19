import React from 'react';
import {HashRouter, Route, Switch, hashHistory} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import store from './Redux';


import Home from './components/Home.jsx';
import Table from './components/Table.jsx';
import Table2 from './components/Table2.jsx';




const BasicRoute = () => (
    <Provider store={store}>
    <HashRouter>
        <Route path="/" render={()=>
　　　　　　　　<Home>
　　　　　　　　　　<Switch>
　　　　　　　　　　　　<Route path='/table1' component={Table} />
                    <Route path="/table2" component={Table2} />
　　　　　　　　　　</Switch>
　　　　　　　　</Home>         
　　　　　　} />
            
    </HashRouter>
    </Provider>
);


export default BasicRoute;