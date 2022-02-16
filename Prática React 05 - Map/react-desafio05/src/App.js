import React, { Component } from "react";
import "./App.css";


//Crie um component de class
class App extends Component {
  
//Crie um array de objetos no STATE com pelo menos 6 objetos
  state = {
    cardapio: [
      {
        dia: "Segunda-feira",
        prato: "Bife"
      },
      {
        dia: "Terça-feira",
        prato: "Sobrecoxa de Frango"
      },
      {
        dia: "Quarta-feira",
        prato: "Filé de peixe"
      },
      {
        dia: "Quinta-feira",
        prato: "Costela de porco"
      },
      {
        dia: "Sexta-feira",
        prato: "Frango à milanesa"
      },
      {
        dia: "Sábado",
        prato: "Stroganoff de frango"
      },
      {
        dia: "Domingo",
        prato: "Lasanha"
      }
    ]
  };

//Faça um map do seu state e exiba os dados na tela
  render() {
    return (
      <div className="cardapio">
        <h1>Cardápio</h1>
        <div className="lista">
          {this.state.cardapio.map((item) => (
            <ul>
              <li>{item.dia}</li>
              <li>{item.prato}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default App;