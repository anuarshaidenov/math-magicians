import CalculatorComponent from '../../components/calculator/calculator';

import './calculator.scss';

const Calculator = () => (
  <div className="calculator-page page container container--small">
    <h1 className="heading">Let&apos;s do some math!</h1>
    <CalculatorComponent />
  </div>
);

export default Calculator;
