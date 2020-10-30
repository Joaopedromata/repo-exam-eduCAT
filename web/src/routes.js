import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Classes from './pages/Classes'
import Classroom from './pages/Classroom'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Classes} /> 
                <Route path="/sala-de-aula" component={Classroom} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes