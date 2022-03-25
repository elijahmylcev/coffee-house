import { Component } from 'react';
import './ListOfCards.scss';
// import propTypes from 'prop-types';
import cardsList from '../app/cards';

export default class ListOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardsList,
      filter: 'Kenya',
    };
  }

  filteredList() {
    const { filter, cards } = this.state;
    switch (filter) {
      case 'Brazil':
        return cards.filter((item) => item.country);
      case 'Kenya':
        return cards.filter((item) => item.country);
      case 'Columbia':
        return cards.filter((item) => item.country);
      default:
        return cards;
    }
  }

  render() {
    const { cards } = this.state;
    this.filteredList();
    const elements = cards.map((element) => (
      <div className="card" key={element.id}>
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

// ListOfCards.propTypes = {
//   filter: propTypes.string.isRequired,
// };
