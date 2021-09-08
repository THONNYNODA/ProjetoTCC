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
import Chamadas from './layout/chamadas';
import Dashbord from './layout/dashbord'
import Error404 from './layout/404'
import Cadastros from './layout/cadastros';
import Configuracao from './layout/configuracao';

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
       <Router >
        <Switch>
            <Route exact path='/'component={Login} />
            <Route path='/cadastro' component={Cadastro}/>
            <PrivateRouter path='/painel' component={Painel}/>
            <PrivateRouter path='/chamadas' component={Chamadas}/>
            <PrivateRouter path='/dashbord' component={Dashbord}/>
            <PrivateRouter path='/cadastros' component={Cadastros}/>  
            <PrivateRouter path='/config' component={Configuracao}/>  
            <Route path="*" component={Error404} />
        </Switch>
       </Router>
    )
}

export default Routes;