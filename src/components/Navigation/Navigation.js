import { Component } from 'react';
import propTypes from 'prop-types';
import './Navigation.scss';
import logotypeWhite from '../../icons/icon.png';
import logotypeBlack from '../../icons/logoBlack.png';

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
    const { propClass, typeClass } = this.props;
    let classesList;
    let logotype;
    if (propClass === 'white') {
      classesList = `menu__item ${propClass}`;
      logotype = logotypeWhite;
    } else {
      classesList = `menu__item ${propClass}`;
      logotype = logotypeBlack;
    }

    const navClass = `menu ${typeClass}`;
    const elements = buttons.map(({ text, id, logo }) => {
      if (logo) {
        return (
          <button
            type="button"
            key={id}
            value={id}
            className={classesList}
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
          className={classesList}
          onClick={this.clickOnPage}
        >
          {text}
        </button>
      );
    });
    return (
      <div className="container">
        <nav className={navClass}>
          {elements}
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  changePage: propTypes.func.isRequired,
  propClass: propTypes.string,
  typeClass: propTypes.string,
};
Navigation.defaultProps = {
  typeClass: '',
  propClass: 'black',
};
