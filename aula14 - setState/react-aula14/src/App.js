import React, { Component } from "react";

class App extends Component {
  state = {
    nome: "Bianca",
    cor: "branco"
  };

  //sintaxe
  // this.setState({
  //   propriedade: "novo valor"
  // })

  // mudarCor = () => {
  //   this.setState({
  //     cor: "azul"
  //   })
  // }

  // mudarCor = () => {
  //   if (this.state.cor === "vermelho") {
  //     this.setState({
  //       cor: "branco"
  //     });
  //   } else {
  //     this.setState({
  //       cor: "vermelho"
  //     });
  //   }
  // };

  mudarCor = () => {
    this.setState({
      cor: this.state.cor === "vermelho" ? "branco" : "vermelho"
    });
  };

  // mudarCor = () => {
  //   this.state.cor == 'vermelho' ? (this.setState.cor({cor: 'branco'})) : (this.setState.cor({cor: 'vermelho'}))
  // }

  // // mudarCor = () => {
  // // 	if(this.state.cor == 'vermelho'){
  // // 		this.setState.cor({cor: 'branco'})
  // // 	}
  // // }

  render() {
    return (
      <div>
        <h2>Minha cor favorita é {this.state.cor}.</h2>
        <button onClick={this.mudarCor}>Mudar cor</button>
      </div>
    );
  }
}

export default App;
