import React from 'react';

import './App.scss';

import Calculator from './components/calculator/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>wag1</h1>
        <div className="container">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
