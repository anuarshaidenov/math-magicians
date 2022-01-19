import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Calculator from './pages/calculator/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<div>quote</div>} />
        </Routes>
      </div>
    );
  }
}

export default App;
