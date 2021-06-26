import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { isAuthenticated } from './config/auth'
import Painel from './layout/painel'
import Cadastro from './layout/cadastro'
import Login from './layout/login';

const PrivateRouter = ({ component: Component, ...rest }) =>(
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (<Component {...props} />) : (<Redirect to={{pathname:"/", state:{ form: props.location }}}/>)
        }
    />
)

const Routes = () =>{

    return(
       <Router>
        <Switch>
            <Route exact path='/'component={Login} />
            <Route path='/cadastro' component={Cadastro}/>
            <PrivateRouter path='/painel' component={Painel}/>
        </Switch>
       </Router>
    )
}

export default Routes;