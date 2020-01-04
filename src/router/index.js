import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter({routes = []}){
    return (
        <Router>
            {
                routes.map( (route, index) => {
                    return <Route path={route.path} exact={route.exact} component={route.component} key={index} />
                } )
            }
        </Router>
    )
}

export default AppRouter;