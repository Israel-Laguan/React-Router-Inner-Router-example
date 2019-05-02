import React from 'react'
import {
    Switch,
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom'
import Home from '../page/Home/Home';
import Page404 from '../page/Page404/Page404';
import Group from '../page/Group/Group';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route
                path="/groups"
                component={Group} />
            {/* <Route
                path="/user/:userid"
                component={MyInnerComponent} /> */}
            <Route
                component={Page404} />
            <Redirect from='*' to='/' />
        </Switch>
    </Router>
)

export default AppRouter