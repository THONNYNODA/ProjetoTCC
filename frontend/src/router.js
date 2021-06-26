import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import {isAuthenticated} from './config/auth'
import Dashbord from './layout/dashbord'
import Cadastro from './layout/cadastro'
import Login from './layout/login';

const PrivateRouter = ({component:Component,...rest}) =>(
    <Route
        {...rest}
        render ={props =>
            isAuthenticated() ? (<Component {...rest}/>) : (<Redirect to={{pathname:"/", state:{ form: props.location }}}/>)
        }
    />
)

export default function mainRouter(){

    return(
        <Switch>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route path='/servico'>
                <Cadastro/>
            </Route>
            <PrivateRouter path='/app'>
                <Dashbord/>
            </PrivateRouter>
        </Switch>
    )
}