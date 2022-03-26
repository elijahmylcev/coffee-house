import { Component } from 'react';
import './OurCoffee.scss';
import About from '../../About/About';
import photo from '../../../img/mask-group.png';
import SearchPanel from './SearchPanel/SearchPanel';
import ListOfCards from '../../ListOfCards/ListOfCards';

export default class OurCoffee extends Component {
  constructor() {
    super();
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
      currentCard: {
        status: true,
        card: {},
      },
    };
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(name) {
    this.setState({
      filter: name,
    });
  }

  // currentCardInList() {
  //   const { currentCard } = this.state;
  //   console.log(currentCard.status);
  // }

  render() {
    const { about, filter, currentCard } = this.state;
    const layout = () => {
      if (currentCard.status) {
        return (
          <div className="container">
            <p>Hello</p>
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
          <SearchPanel changeFilter={this.changeFilter} />
          <ListOfCards filter={filter} />
        </div>
      );
    };
    return (
      <section>
        {layout()}
      </section>
    );
  }
}
