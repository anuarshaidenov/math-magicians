import CalculatorComponent from '../../components/calculator/calculator';

import './calculator.scss';

const Calculator = () => (
  <div className="calculator-page page container">
    <h1 className="heading calculator-page__heading">
      Let&apos;s do some math!
    </h1>
    <div className="calculator-page__calculator">
      <CalculatorComponent />
    </div>
  </div>
);

export default Calculator;
