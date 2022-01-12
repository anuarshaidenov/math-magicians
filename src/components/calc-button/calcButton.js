import PropTypes from 'prop-types';

import './calcButton.scss';

const CalcButton = ({
  name, primary, span2, handleClick,
}) => (
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

CalcButton.propTypes = {
  name: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  span2: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

CalcButton.defaultProps = {
  primary: false,
  span2: false,
};

export default CalcButton;
