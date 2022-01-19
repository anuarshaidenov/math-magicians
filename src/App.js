import React from 'react';

import './App.scss';

import Header from './components/header/Header';
import Home from './pages/home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
