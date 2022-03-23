import { Component } from 'react';
import propTypes from 'prop-types';
import './Navigation.scss';
import logotype from '../../icons/icon.png';

export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [
        { id: 1, text: 'Coffee house', logo: true },
        { id: 2, text: 'Our coffee', logo: false },
        { id: 3, text: 'For your pleasure', logo: false },
      ],
    };
    this.clickOnPage = this.clickOnPage.bind(this);
  }

  clickOnPage(e) {
    e.preventDefault();
    const { changePage } = this.props;
    changePage(e.target.value);
  }

  render() {
    const { buttons } = this.state;
    const { propClass } = this.props;
    const classesList = `menu ${propClass}`;
    const elements = buttons.map(({ text, id, logo }) => {
      if (logo) {
        return (
          <button
            type="button"
            key={id}
            value={id}
            className="menu__item"
            onClick={this.clickOnPage}
          >
            <img src={logotype} alt="Logo" className="menu__logo" />
            {text}
          </button>
        );
      } return (
        <button
          type="button"
          key={id}
          value={id}
          className="menu__item"
          onClick={this.clickOnPage}
        >
          {text}
        </button>
      );
    });
    return (
      <div className="container">
        <nav className={classesList}>
          {elements}
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  changePage: propTypes.func.isRequired,
  propClass: propTypes.string.isRequired,
};
