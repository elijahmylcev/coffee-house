import { Component } from 'react';
import ListOfCards from '../ListOfCards/ListOfCards';
import './OurBest.scss';

class OurBest extends Component {
  render() {
    return (
      <section className="ourBest">
        <div className="container">
          <h3 className="ourBest__title">Our best</h3>
          <ListOfCards isBest />
        </div>
      </section>
    );
  }
}

export default OurBest;
