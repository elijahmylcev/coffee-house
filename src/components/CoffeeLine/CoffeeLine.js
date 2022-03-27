import propTypes from 'prop-types';
import blackLogo from '../../icons/logo.png';
import whiteLogo from '../../icons/CoffeeLineWhite.png';
import './CoffeeLine.scss';

export default function CoffeeLine(props) {
  const { classInp } = props;
  let logo;
  let classes = 'wrapper__line ';
  if (classInp === 'white') {
    logo = whiteLogo;
    classes += classInp;
  } else {
    logo = blackLogo;
    classes += classInp;
  }

  return (
    <div className="wrapper">
      <div className={classes} />
      <img src={logo} alt="Coffee" />
      <div className={classes} />
    </div>
  );
}

CoffeeLine.propTypes = {
  classInp: propTypes.string,
};

CoffeeLine.defaultProps = {
  classInp: 'black',
};
