import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// import { Container } from './styles';

function AuthComponent(props) {

    const userAuth = ({ component: Component, ...rest }) => {
        localStorage.setItem(Permissions)==="ADMIN" ? <Component {...props}/> : <Redirect to={{pathname:"/", state:{ form: props.location }}}/>
    }

  return(
    <>
        
    </>
  );
}

export default AuthComponent;

