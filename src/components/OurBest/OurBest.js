import { Component } from 'react';
import propTypes from 'prop-types';
import ListOfCards from '../ListOfCards/ListOfCards';
import './OurBest.scss';

class OurBest extends Component {
  onCurrentCard(element) {
    const { onCurrentCardInOurBest } = this.props;
    onCurrentCardInOurBest(element);
  }

  render() {
    return (
      <section className="ourBest">
        <div className="container">
          <h3 className="ourBest__title">Our best</h3>
          <ListOfCards isBest onCurrentCard={(element) => this.onCurrentCard(element)} />
        </div>
      </section>
    );
  }
}

export default OurBest;

OurBest.propTypes = {
  onCurrentCardInOurBest: propTypes.func,
};

OurBest.defaultProps = {
  onCurrentCardInOurBest: () => {},
};
