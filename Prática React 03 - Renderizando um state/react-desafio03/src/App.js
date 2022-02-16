import React, { Component } from "react";
import "./App.css";
import imagemBanana from "./bananas.jpg";

// Crie uma class component
class App extends Component {
  // Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.
  state = {
    nome: "Daniel",
    idade: 29,
    comida: "Macarrão",
    musica: ["Lilás", "Alucinação", "Magnólia"]
  };

  // Renderize na tela:
  // Seu nome em um h1
  // Sua idade em um h2
  // Sua comida favorita em um h3
  // Suas músicas favoritas em uma lista (ul / ol)

  //  **Bônus
  // Adicione uma imagem da sua fruta favorita via import
  render() {
    return (
      <div className="conteudo">
        <div className="bloco">
          <h1>Meu nome:</h1>
          <h1>{this.state.nome}</h1>
        </div>
        <div className="bloco">
          <h2>Idade:</h2>
          <h2>{this.state.idade}</h2>
        </div>
        <div className="bloco">
          <h3>Comida favorita:</h3>
          <h3>{this.state.comida}</h3>
        </div>
        <div className="bloco">
          <h4>Músicas:</h4>
          <ul>
            <li>{this.state.musica[0]}</li>
            <li>{this.state.musica[1]}</li>
            <li>{this.state.musica[2]}</li>
          </ul>
        </div>
        <img src={imagemBanana} alt="Bananas" />
      </div>
    );
  }
}

export default App;
