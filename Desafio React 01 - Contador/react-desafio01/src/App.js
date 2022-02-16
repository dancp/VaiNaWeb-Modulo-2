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
      <div className="container">
        <button onClick={this.remove}>-</button>
        <h1>{this.state.num}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.clear}>C</button>
      </div>
    );
  }
}

export default App;
