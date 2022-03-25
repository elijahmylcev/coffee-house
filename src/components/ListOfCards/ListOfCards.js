import { Component } from 'react';
import './ListOfCards.scss';
import cardsList from '../app/cards';

export default class ListOfCards extends Component {
  constructor() {
    super();
    this.state = {
      cards: cardsList,
    };
  }

  render() {
    const { cards } = this.state;
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
