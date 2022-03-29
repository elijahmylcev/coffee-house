import { Component } from 'react';
import propTypes from 'prop-types';
import './OurCoffee.scss';
import About from '../../About/About';
import photo from '../../../img/mask-group.png';
import SearchPanel from './SearchPanel/SearchPanel';
import ListOfCards from '../../ListOfCards/ListOfCards';
import CoffeeLine from '../../CoffeeLine/CoffeeLine';

export default class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        id: 2,
        title: 'About our beans',
        description: (
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br />
            {' '}
            <br />
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions.
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
          </p>
        ),
      },
      filter: 'All',
      term: '',
      currentCard: {
        status: false,
        card: {},
      },
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.OnCurrentCard = this.OnCurrentCard.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
  }

  changeFilter(name) {
    this.setState({
      filter: name,
    });
  }

  OnCurrentCard(obj) {
    this.setState({
      currentCard: {
        status: true,
        card: obj,
      },
    });
  }

  changeTerm(term) {
    this.setState({
      term,
    });
  }

  render() {
    const {
      about, filter, currentCard, term,
    } = this.state;

    const layout = () => {
      if (currentCard.status) {
        return (
          <div className="container">
            <div className="cardWrapper">
              <img src={currentCard.card.img} alt="Coffee" className="cardWrapper__img" />
              <div className="cardWrapper__description">
                <div className="cardWrapper__description_title">
                  {currentCard.card.name}
                </div>
                <CoffeeLine />
                <div className="cardWrapper__description_country">
                  <span>Country:</span>
                  {' '}
                  {currentCard.card.country}
                </div>
                <div className="cardWrapper__description_description">
                  <span>Description:</span>
                  {' '}
                  {currentCard.card.description}
                </div>
                <div className="cardWrapper__description_price">
                  Price:
                  {' '}
                  <span>{`${currentCard.card.price}$`}</span>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="container">
          <div className="info">
            <img src={photo} alt="CoolPhoto" />
            <About {...about} />
          </div>
          <div className="stroke" />
          <SearchPanel changeFilter={this.changeFilter} onChangeTerm={this.changeTerm} />
          <ListOfCards onCurrentCard={this.OnCurrentCard} filter={filter} term={term} />
        </div>
      );
    };
    return (
      <section>
        { layout() }
      </section>
    );
  }
}

OurCoffee.propTypes = {
  status: propTypes.bool,
  element: propTypes.func,
};

OurCoffee.defaultProps = {
  status: false,
  element: null,
};
