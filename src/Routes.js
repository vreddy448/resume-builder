import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContainer from './containers/app-container';

export const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AppContainer} />
                <Route path="/home" component={AppContainer} />
            </Switch>
        </BrowserRouter>
    )
};

