import './About.scss';
import propTypes from 'prop-types';
import CoffeeLine from '../CoffeeLine/CoffeeLine';

export default function About(props) {
  const { title, description } = props;
  return (
    <div className="container">
      <div className="about">
        <h3 className="about__title">{title}</h3>
        <CoffeeLine />
        <div className="about__description">
          {description}
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.func,
};

About.defaultProps = {
  description: () => {},
};
