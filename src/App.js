import React, { Component } from 'react';

import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ClearButton from './components/ClearButton/ClearButton';
 
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };

    this.addToInput = this.addToInput.bind(this);
    this.addZeroToInput = this.addZeroToInput.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);
    this.multiply = this.multiply.bind(this);
    this.evaluate = this.evaluate.bind(this);

  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  } 

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val })
    }
  }

  addDecimal = val => {
    if (this.state.input.indexOf('.') === -1 ) {
      this.setState({ input: this.state.input + val })
    }
  }

  clearInput = val => {
    this.setState({ input: "" })
  }

  add = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = 'plus';
  }

  subtract = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = 'munus';
  }
  
  divide = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = 'divide';
  }

  multiply = val => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = 'multiply';
  }

  evaluate = val => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator === 'plus') {
      this.setState({
        input: 
          parseInt(this.state.previousNumber) + 
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === 'munus') {
      this.setState({
        input: 
          parseInt(this.state.previousNumber) - 
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === 'divide') {
      this.setState({
        input: 
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === 'multiply') {
      this.setState({
        input: 
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='calc-wrapper'>
          <div className='row'> 
            <Input>{this.state.input}</Input>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply }>*</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className='row'>
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
