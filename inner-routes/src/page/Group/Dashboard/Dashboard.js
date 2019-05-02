import React from 'react'

const Dashboard = ({match}) => {
    return (
        <div>
            <h1>{match.params.id}</h1>
            {/* <Route path={`${match.path}:id`} component={ Cars } /> */}
        </div>
    )
}

export default Dashboard