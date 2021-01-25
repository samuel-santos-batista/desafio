import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart'
import User from '../pages/User'



export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/cart" component={Cart} />
            <Route path="/user" component={User} />
        </Switch>
    );
};