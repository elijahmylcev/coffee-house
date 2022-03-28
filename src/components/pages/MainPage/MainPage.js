import { Component } from 'react';
import propTypes from 'prop-types';
import './MainPage.scss';
import About from '../../About/About';
import OurBest from '../../OurBest/OurBest';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        id: 1,
        title: 'About Us',
        description: (
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
            <br />
            {' '}
            <br />

            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
          </p>
        ),
      },
    };
  }

  onCurrentCard(elem) {
    const { onCurrentCardInMain } = this.props;
    onCurrentCardInMain(elem, 2);
  }

  render() {
    const { about } = this.state;
    return (
      <section>
        <About {...about} />
        <OurBest onCurrentCardInOurBest={(elem) => this.onCurrentCard(elem)} />
      </section>
    );
  }
}

MainPage.propTypes = {
  onCurrentCardInMain: propTypes.func,
};

MainPage.defaultProps = {
  onCurrentCardInMain: () => {},
};
