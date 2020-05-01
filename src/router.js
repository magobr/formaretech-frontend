import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Chat from './pages/chat';
import NotFound from './components/NotFound'

import { history } from './history';

const Routes = () => (
    <Router history={history} >
        <Switch>
            <Route component = {Login} exact path="/" />
            <Route component = {Chat} path="/chat"  />
            <Route component = {NotFound}/>
        </Switch>
    </Router>

)

export default Routes;