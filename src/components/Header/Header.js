import { Component } from 'react';
import propTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: props.layout,
    };
  }

  render() {
    const { layout } = this.state;
    return (
      <div>
        <Navigation />
        <div className="container">
          {layout}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  layout: propTypes.objectOf.isRequired,
};
