import React from 'react';
import './calculator.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div type="button" className="calculator__result">
          0
        </div>
        <button type="button" className="calculator__button">
          AC
        </button>
        <button type="button" className="calculator__button">
          +/-
        </button>
        <button type="button" className="calculator__button">
          %
        </button>
        <button
          type="button"
          className="calculator__button calculator__button--primary"
        >
          ÷
        </button>
        <button type="button" className="calculator__button">
          7
        </button>
        <button type="button" className="calculator__button">
          8
        </button>
        <button type="button" className="calculator__button">
          9
        </button>
        <button
          type="button"
          className="calculator__button calculator__button--primary"
        >
          x
        </button>
        <button type="button" className="calculator__button">
          4
        </button>
        <button type="button" className="calculator__button">
          5
        </button>
        <button type="button" className="calculator__button">
          6
        </button>
        <button
          type="button"
          className="calculator__button calculator__button--primary"
        >
          -
        </button>
        <button type="button" className="calculator__button">
          1
        </button>
        <button type="button" className="calculator__button">
          2
        </button>
        <button type="button" className="calculator__button">
          3
        </button>
        <button
          type="button"
          className="calculator__button calculator__button--primary"
        >
          +
        </button>
        <button
          type="button"
          className="calculator__button calculator__button--span-2"
        >
          0
        </button>
        <button type="button" className="calculator__button">
          .
        </button>
        <button
          type="button"
          className="calculator__button calculator__button--primary"
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
