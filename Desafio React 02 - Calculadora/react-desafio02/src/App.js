import React, { Component } from "react";
import "./App.css";

class Calc extends Component {
  state = {
    num1: "",
    num2: "",
    result: ""
  };

  handleChange1 = (event) => {
    this.setState({
      num1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      num2: Number(event.target.value)
    });
  };

  mult = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 * num2
    });
  };

  div = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 / num2
    });
  };

  soma = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 + num2
    });
  };

  sub = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 - num2
    });
  };

  clear = () => {
    this.setState({
      num1: "",
      num2: "",
      result: ""
    });
  };

  render() {
    return (
      <div className="calc">
        <div className="calc_top">
          <div className="result">
            <p>Resultado:</p>
            <p className="result_box">{this.state.result}</p>
          </div>
          <div className="inputs">
            <div className="inputs_box1">
              <p>Número 1:</p>
              <input value={this.state.num1} onChange={this.handleChange1} />
            </div>
            <div className="inputs_box2">
              <p>Número 2:</p>
              <input value={this.state.num2} onChange={this.handleChange2} />
            </div>
          </div>
        </div>
        <div className="calc_bottom">
          <div className="op_btns">
            <button onClick={this.mult}>&#215;</button>
            <button onClick={this.div}>&#247;</button>
            <button onClick={this.soma}>&#43;</button>
            <button onClick={this.sub}>&#8722;</button>
          </div>
          <div className="clear_btn">
            <button onClick={this.clear}>C</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
