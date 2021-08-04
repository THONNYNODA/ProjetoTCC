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
import Teste from './layout/Teste'

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
            <Route path='/teste' component={Teste}/>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
       </Router>
    )
}

export default Routes;