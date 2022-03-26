import { Component } from 'react';
import './ListOfCards.scss';
import propTypes from 'prop-types';
import cardsList from '../app/cards';

export default class ListOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardsList,
    };
  }

  filteredList() {
    const { cards } = this.state;
    const { filter, isBest } = this.props;
    if (isBest) {
      return cards.filter((item) => {
        if (item.isBest) {
          return item;
        }
        return false;
      });
    }
    switch (filter) {
      case 'Brazil':
        return cards.filter((item) => {
          if (item.country === filter) {
            return item;
          }
          return false;
        });
      case 'Kenya':
        return cards.filter((item) => {
          if (item.country === filter) {
            return item;
          }
          return false;
        });
      case 'Columbia':
        return cards.filter((item) => {
          if (item.country === filter) {
            return item;
          }
          return false;
        });
      default:
        return cards;
    }
  }

  render() {
    const test = this.filteredList();
    const elements = test.map((element) => (
      <div
        onClick={() => console.log(element.id)}
        className="card"
        key={element.id}
        aria-hidden="true"
      >
        <img src={element.img} alt="Coffee" className="card__img" />
        <div className="card__title">{element.name}</div>
        <span className="card__country">{element.country}</span>
        <div className="card__price">
          {`${element.price}$`}
        </div>
      </div>
    ));
    return (
      <section>
        <div className="container">
          <div className="cardsWrapper">
            {elements}
          </div>
        </div>
      </section>
    );
  }
}

ListOfCards.propTypes = {
  filter: propTypes.string,
  isBest: propTypes.bool,
};
ListOfCards.defaultProps = {
  filter: 'All',
  isBest: false,
};
