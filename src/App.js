import React, { Component } from 'react';
import './App.css';

//COMPONENTS
import Form from './components/Form';
import Converter from './components/Converter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rgbValue: '',
      hexValue: ''
    }
  }
  rgbInput = (userInput) => {
    this.setState({
      rgbValue: userInput
    })
  }
  updateHex = (hexValue) => {
    this.setState({
      hexValue: hexValue
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>RGB to Hex Converter</h1>
        </header>
        <main>
          <Form rgbInput={this.rgbInput} />
          <Converter rgbValue={this.state.rgbValue} hexValue={this.updateHex} />
        </main>

      </div>
    );
  }
}

export default App;
