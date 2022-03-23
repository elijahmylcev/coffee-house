import propTypes from 'prop-types';
import CoffeeLine from '../CoffeeLine/CoffeeLine';
import Navigation from '../Navigation/Navigation';
import './Footer.scss';

export default function Footer(props) {
  const { changePage } = props;
  return (
    <footer>
      <Navigation
        changePage={(index) => {
          changePage(index);
        }}
        propClass="black"
        typeClass="footer_navigation"
      />
      <CoffeeLine />
    </footer>
  );
}

Footer.propTypes = {
  changePage: propTypes.func.isRequired,
};
