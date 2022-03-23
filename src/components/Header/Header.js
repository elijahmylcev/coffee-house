import { Component } from 'react';
import propTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import CoffeeLine from '../CoffeeLine/CoffeLine';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1>{title}</h1>
          <CoffeeLine />
          <p>
            We makes every day full of energy and taste
            <br />
            Want to try our beans?
          </p>
          <button type="button">More</button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: propTypes.string.isRequired,
};
