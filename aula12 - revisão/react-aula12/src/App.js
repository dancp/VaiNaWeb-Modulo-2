// import React, { Component } from "react";

// export default class App extends Component {

// state = {
//   pessoas: [
//     {
//       nome: "Andreina",
//       idade: 21,
//       musica: ["Rap", "Sertanejo", "Funk"]
//     }
//   ]
// };
// render() {
//   return (
//     <div>
//       <h1 className='title'>Nome: {this.state.pessoas[0].nome}</h1>
//       <h2>Idade: {this.state.pessoas[0].idade}</h2>
//       <h2>Música: {this.state.pessoas[0].musica[2]}</h2>
//     </div>
//   );
// }

//   Soma = () => {
//     return 2+2
//   }
//   Multiplicacao = (x,y) =>{
//     return x*y
//   }
//   Mensagem = () => {
//     return <h2>Aqui é uma mensagem</h2>
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.Soma()}</h1>
//         <h1>{this.Multiplicacao(8,2)}</h1>
//         {this.Mensagem()}
//       </div>
//     )
//   }
// }

import React, { Component } from "react";

export default class App extends Component {
  // 1- use uma arrow fuction e retorne uma mensagem na tela
  mensagem = () => {
    return <h2>Aqui é uma mensagem.</h2>;
  };

  // 2- retorne uma soma com dois numeros passados no parâmetro
  soma = (a, b) => {
    return a + b;
  };

  // 3- Com arrow function retorne o resultado de uma subtração na tela
  sub = (x, y) => {
    return x - y;
  };

  render() {
    return (
      <div>
        {this.mensagem()}
        <h1>{this.soma(2, 2)}</h1>
        <h1>{this.sub(4, 6)}</h1>
      </div>
    );
  }
}
