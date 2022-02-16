import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    num: 0
  };

  add = () => {
    if (this.state.num < 10) {
      this.setState({
        num: this.state.num + 1
      });
    }
  };

  remove = () => {
    if (this.state.num > 0) {
      this.setState({
        num: this.state.num - 1
      });
    }
  };

  clear = () => {
    this.setState({
      num: 0
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <h1>{this.state.num}</h1>
        <button onClick={this.remove}>-</button>
        <button onClick={this.clear}>C</button>
      </div>
    );
  }
}

export default App;

// <<-- Revisão 02 -->>

// import React, { Component } from "react";
// import "./styles.css";
// import gatoImg from "./img/gato.jpg";

// class App extends Component {
//   state = {
//     animal: "Gato"
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Olá, CodeSandbox!</h1>
//         <h2>Aqui está um animal: {this.state.animal}.</h2>
//         <img src={gatoImg} alt="imagem de um gato filhote" />
//       </div>
//     );
//   }
// }

// export default App;

// <<-- Revisão 02 -->>

// import React, { Component } from "react";
// import "./styles.css";

// class App extends Component {
//   state = {
//     propriedade: "camarão que dorme na areia o mar leva"
//   };

//   msg = () => {
//     return <p>Você só vence amanhã se não desistir hoje!</p>;
//   };

//   soma = (n1, n2) => {
//     return n1 + n2;
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Olá, CodeSandbox!</h1>
//         <h2>Aqui está uma frase: {this.state.propriedade}.</h2>
//         <h2>Aqui está outra frase:</h2>
//         {this.msg()}
//         <h2>A soma de 1000 + 2000 = {this.soma(1000, 2000)}</h2>
//       </div>
//     );
//   }
// }

// export default App;

// <<-- Revisão 01 -->>

// import React from "react"
// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Olá, CodeSandbox!</h1>
//       <h2>Aqui está uma frase.</h2>
//     </div>
//   );
// }

// export default App
