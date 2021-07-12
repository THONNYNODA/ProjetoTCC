import React, { Component } from 'react';
import api from '../../services/api'
import { login } from '../../config/auth';

import { withRouter } from 'react-router-dom';
// import { Container } from './styles';

export default class Cadastro extends Component {

  state = {
    nmUsuario: "",
    dsSenha: ""
  };

  handleSubmit = async e =>{
    e.preventDefault();

    const { nmUsuario, dsSenha} = this.state;
  
    if(!nmUsuario || !dsSenha){
      this.setState({ error: "Preencha o nmUsuario e dsSenha para continuar"});
    } else{
      try {
        console.log(this.state)
        const response = await api.post('/usuario/autenticacao', { nmUsuario, dsSenha });
        login(response.data.token);
        this.props.history.push('/painel');
      } catch (error) {
        console.log(error)
          this.setState({
            error: "Houve um problema com o login, verifique suas credenciais. T.T"
          })
      }
    }

   }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
          <label>nmUsuario</label>
          <input  type="text" value={this.state.nmUsuario} onChange={e => this.setState({nmUsuario: e.target.value}) } />
          <label>dsSenha</label>
          <input type="password" value={this.state.dsSenha} onChange={e => this.setState({dsSenha: e.target.value}) } />
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}