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
    this.filteredList = this.filteredList.bind(this);
    this.current = this.current.bind(this);
    this.filterByTerm = this.filterByTerm.bind(this);
  }

  filterByTerm() {
    const { cards } = this.state;
    const { term } = this.props;

    if (term.length === 0) {
      return cards;
    }
    return cards.filter((item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  filteredList() {
    // const { cards } = this.state;
    const { filter, isBest } = this.props;

    const cards = this.filterByTerm();
    console.log(cards);

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

  current(obj) {
    const { onCurrentCard } = this.props;
    onCurrentCard(obj);
  }

  render() {
    const test = this.filteredList();
    const elements = test.map((element) => (
      <div
        onClick={() => this.current(element)}
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
  onCurrentCard: propTypes.func,
  term: propTypes.string,
};
ListOfCards.defaultProps = {
  filter: 'All',
  isBest: false,
  onCurrentCard: () => {},
  term: '',
};
