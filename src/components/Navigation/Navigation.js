import { Component } from 'react';
// import propTypes from 'prop-types';
import './Navigation.scss';
import logotype from '../../icons/icon.png';

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [
        { id: 1, text: 'Coffee house', logo: true },
        { id: 2, text: 'Our coffee', active: false },
        { id: 3, text: 'For your pleasure', active: false },
      ],
    };
  }

  render() {
    const { buttons } = this.state;
    const elements = buttons.map(({ text, id, logo }) => {
      if (logo) {
        return (
          <button
            type="submit"
            key={id}
            className="menu__item"
          >
            <img src={logotype} alt="Logo" className="menu__logo" />
            {text}
          </button>
        );
      } return (
        <button
          type="submit"
          key={id}
          className="menu__item"
        >
          {text}
        </button>
      );
    });
    return (
      <div className="container">
        <nav className="menu">
          {elements}
        </nav>
      </div>
    );
  }
}
