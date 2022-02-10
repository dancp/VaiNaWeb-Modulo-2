import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // state = {
  //   nome: "Luzia",
  //   sobrenome: "Merlim"
  // }

  // Ola = () => {
  //   return `Olá ${this.state.nome}`
  // }

  // render() {
  //   return (
  //     <div>
  //       <h1>Boa noite, galera!</h1>
  //       <h2>{this.state.sobrenome}</h2>
  //       <h2>{this.Ola()}</h2>
  //     </div>
  //   );
  // }

  state = {
    pessoas: [
      {
        nome: "Lucas",
        fruta: "Manga",
        cidade: "Volta Redonda"
      },
      {
        nome: "Barbara",
        fruta: "Cajú"
      },
      {
        nome: "Larissa",
        fruta: "Tamarindo"
      },
      {
        nome: "Ghislain",
        fruta: "Morango"
      },
      {
        nome: "Bianca",
        fruta: "Maça"
      },
      {
        nome: "Dandara",
        fruta: "Fruta do Conde"
      },
      {
        nome: "Andreina",
        fruta: "Pitaya"
      },
      {
        nome: "Mateus",
        fruta: "Goiaba"
      },
      {
        nome: "Felipe",
        fruta: "Pitomba"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Boa noite, galera!</h1>
        <p>
          {this.state.pessoas.map((item) => (
            <ol>
              <li>{item.nome}</li>
              <li>{item.fruta}</li>
            </ol>
          ))}
        </p>
      </div>
    );
  }
}

export default App;
