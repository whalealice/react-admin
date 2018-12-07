import React from 'react';
import {HashRouter, Route, Switch,hashHistory} from 'react-router-dom';
import Home from './components/Home.jsx';
import Table from './components/Table.jsx';
import Table2 from './components/Table2.jsx';


const BasicRoute = () => (
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

    //     <Switch>
    //         <Route exact path={'/'}  component={Home}>
    //             <Route path={'table1'} component={Table} />
    //             <Route path={'table2'} component={Table2} />
    //         </Route>
    //     </Switch>
    // </HashRouter>
);


export default BasicRoute;