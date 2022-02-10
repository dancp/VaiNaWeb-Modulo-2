import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    nome: "Daniel",
    idade: 29,
    alunos: ["Davi", "Samuel", "Bárbara"],
    cadastro: [
      {
        nome: "Eronar",
        idade: 15
      },
      {
        nome: "Aline",
        idade: 18
      },
      {
        nome: "Bianca",
        idade: 23,
        amigos: ["Ghislain", "Ana Luiza"]
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Boa noite!</h1>
        <h2>Meu nome é:</h2>
        <p>{this.state.nome}</p>
        <h2>idade:</h2>
        <p>{this.state.idade}</p>
        <h2>Aluno:</h2>
        <p>{this.state.alunos[2]}</p>
        <h2>Cadastro:</h2>
        <p>
          {this.state.cadastro[2].nome}, {this.state.cadastro[2].idade}
        </p>
        <ul>
          <li>{this.state.cadastro[2].amigos[1]}</li>
          <li>{this.state.cadastro[2].amigos[0]}</li>
        </ul>
      </div>
    );
  }
}

// function App(){
//   return(
//     <div>
//       <h1>Boa noite turma!!</h1>
//     </div>
//   );
// }

export default App;