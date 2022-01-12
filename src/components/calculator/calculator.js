import React from 'react';
import './calculator.scss';

import calculate from '../../logic/calculate';

import CalcButton from '../calc-button/calcButton';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const pressedButton = e.target.name;
    const newState = calculate(this.state, pressedButton);
    this.setState(newState);
  };

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calculator">
        <div name="0" className="calculator__result">
          {`${total || ''} ${operation || ''} ${next || ''} `}
        </div>
        <CalcButton name="AC" handleClick={this.handleClick} />
        <CalcButton name="+/-" handleClick={this.handleClick} />
        <CalcButton name="%" handleClick={this.handleClick} />
        <CalcButton name="÷" primary handleClick={this.handleClick} />
        <CalcButton name="7" handleClick={this.handleClick} />
        <CalcButton name="8" handleClick={this.handleClick} />
        <CalcButton name="9" handleClick={this.handleClick} />
        <CalcButton name="x" primary handleClick={this.handleClick} />
        <CalcButton name="4" handleClick={this.handleClick} />
        <CalcButton name="5" handleClick={this.handleClick} />
        <CalcButton name="6" handleClick={this.handleClick} />
        <CalcButton name="-" primary handleClick={this.handleClick} />
        <CalcButton name="1" handleClick={this.handleClick} />
        <CalcButton name="2" handleClick={this.handleClick} />
        <CalcButton name="3" handleClick={this.handleClick} />
        <CalcButton name="+" primary handleClick={this.handleClick} />
        <CalcButton name="0" span2 handleClick={this.handleClick} />
        <CalcButton name="." handleClick={this.handleClick} />
        <CalcButton name="=" primary handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
