import React from "react"
import {Route, Switch} from 'react-router-dom'
import {routes} from "../../routes"



export const AppRouter: React.FC = () => {
    return (
        <Switch>
            {
                routes.map( route => {
                    return <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                })
            }
        </Switch>
    )
}