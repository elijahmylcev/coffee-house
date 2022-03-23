import { Component } from 'react';
import propTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: props.layout,
    };
  }

  render() {
    const { layout } = this.state;
    const { sendUrl } = this.props;
    console.log(sendUrl);
    return (
      <header>
        <Navigation />
        <div className="container">
          {layout}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  layout: propTypes.objectOf.isRequired,
  sendUrl: propTypes.string.isRequired,
};
