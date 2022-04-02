import { Component } from 'react';
import propTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

export default class Header extends Component {
  render() {
    const { layout, sendClass, changePage } = this.props;
    return (
      <header className={sendClass}>
        <Navigation
          changePage={(index) => {
            changePage(index);
          }}
          propClass="white"
        />
        <div className="container">
          {layout}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  layout: propTypes.node,
  sendClass: propTypes.string.isRequired,
  changePage: propTypes.func.isRequired,
};

Header.defaultProps = {
  layout: () => {},
};
