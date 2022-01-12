import { useState } from 'react';
import './calculator.scss';

import calculate from '../../logic/calculate';

import CalcButton from '../calc-button/calcButton';

const Calculator = () => {
  const [calculatorValues, setCalculatorValues] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const pressedButton = e.target.name;
    const newState = calculate(calculatorValues, pressedButton);
    setCalculatorValues(newState);
  };

  const { total, next, operation } = calculatorValues;

  return (
    <div className="calculator">
      <div name="0" className="calculator__result">
        {!total && !next && !operation
          ? '0'
          : `${total || ''} ${operation || ''} ${next || ''}`}
      </div>
      <CalcButton name="AC" handleClick={handleClick} />
      <CalcButton name="+/-" handleClick={handleClick} />
      <CalcButton name="%" handleClick={handleClick} />
      <CalcButton name="÷" primary handleClick={handleClick} />
      <CalcButton name="7" handleClick={handleClick} />
      <CalcButton name="8" handleClick={handleClick} />
      <CalcButton name="9" handleClick={handleClick} />
      <CalcButton name="x" primary handleClick={handleClick} />
      <CalcButton name="4" handleClick={handleClick} />
      <CalcButton name="5" handleClick={handleClick} />
      <CalcButton name="6" handleClick={handleClick} />
      <CalcButton name="-" primary handleClick={handleClick} />
      <CalcButton name="1" handleClick={handleClick} />
      <CalcButton name="2" handleClick={handleClick} />
      <CalcButton name="3" handleClick={handleClick} />
      <CalcButton name="+" primary handleClick={handleClick} />
      <CalcButton name="0" span2 handleClick={handleClick} />
      <CalcButton name="." handleClick={handleClick} />
      <CalcButton name="=" primary handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
