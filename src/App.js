import React, { Component } from "react";
import UsuarioEntrada from "./UsuarioEntrada";
import UsuarioSaida from "./UsuarioSaida";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { usu: "Anderson Diogo do Nascimento" };
  }

  onChangeUsuario = (parametroUsuario) => {
    this.setState({
      usu: parametroUsuario
    });
  }

  render() { 
    return (
      <div>
        <center>
          <UsuarioEntrada usu={ this.state.usu } onChangeUsuario={ this.onChangeUsuario }  />  
          <UsuarioSaida usu={ this.state.usu }/>               
        </center>
      </div>     
    ); 
  };
}


export default App;
