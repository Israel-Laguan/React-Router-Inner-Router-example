import React from 'react'
import { Route, Link } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';

function Group({ match }) {
    return (
        <div>
            <h1>Groups</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/programming`}>Programming</Link>
                </li>
                <li>
                    <Link to={`${match.url}/memes`}>Memes</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:id`} component={Dashboard} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    )
}

export default Group