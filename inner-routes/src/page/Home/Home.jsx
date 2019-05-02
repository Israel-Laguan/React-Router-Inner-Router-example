import React from 'react'
import { Route, Link } from "react-router-dom";
import './App.css';
import Group from '../Group/Group';
import logo from './logo.svg'
function Home({ match }) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to='/groups' >
                    Groups
                </Link>
            </header>
           <Route path={`${match.path}groups/`} component={Group} />
        </div>
    )
}

export default Home