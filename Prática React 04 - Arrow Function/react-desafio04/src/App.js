import React, { Component } from "react";
import "./App.css";

//Crie um component de class
// Crie uma arrow function que receba uma mensagem e exiba na tela
// Crie uma arrow function que retorne o dobro de um número e exiba na tela
export default class App extends Component {
  mensagem = () => {
    return <p>"Todos os meus movimentos são friamente calculados"</p>;
  };

  dobro = (x) => {
    return x * 2;
  };

  render() {
    return (
      <div className="conteudo">
        <div className="bloco">
          <p>Uma frase famosa:</p>
          {this.mensagem()}
        </div>
        <div className="bloco">
          <p>O dobro de 5 é: </p>
          <p>{this.dobro(5)}</p>
        </div>
      </div>
    );
  }
}
