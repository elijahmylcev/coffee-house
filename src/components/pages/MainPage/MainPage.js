import { Component } from 'react';
import './MainPage.scss';
import About from '../../About/About';
import OurBest from '../../OurBest/OurBest';

export default class MainPage extends Component {
  constructor() {
    super();
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

  render() {
    const { about } = this.state;
    return (
      <section>
        <About {...about} />
        <OurBest />
      </section>
    );
  }
}
