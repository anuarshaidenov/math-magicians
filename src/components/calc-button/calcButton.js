/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import './calcButton.scss';

const CalcButton = ({ name, primary, span2, handleClick }) => (
  <button
    name={name}
    onClick={handleClick}
    type="button"
    className={`calculator__button${
      span2 ? ' calculator__button--span-2' : ''
    }${primary ? ' calculator__button--primary' : ''}`}
  >
    {name}
  </button>
);

export default CalcButton;
