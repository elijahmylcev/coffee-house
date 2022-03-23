import logo from '../../icons/logo.png';
import './CoffeeLine.scss';

export default function CoffeeLine() {
  return (
    <div className="wrapper">
      <div className="wrapper__line" />
      <img src={logo} alt="Coffee" />
      <div className="wrapper__line" />
    </div>
  );
}
