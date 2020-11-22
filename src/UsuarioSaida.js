import React, { Component } from "react";

class UsuarioSaida extends Component {
  render() {
    return (
      <div>
        <p> {
        this.props.usu
        } 
        </p>

        <p>Seja bem vindo!</p>
      </div>
    );
  }
}

export default UsuarioSaida;