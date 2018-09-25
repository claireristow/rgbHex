import React, { Component } from 'react';
import './App.css';

//COMPONENTS
import Form from './components/Form';
import Hex from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hexValue: '#000000'
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>RGB to Hex Converter</h1>
        </header>
        <main>
          <Form />
          {/* <Hex hexValue={this.state.hexValue} /> */}
        </main>

      </div>
    );
  }
}

export default App;
