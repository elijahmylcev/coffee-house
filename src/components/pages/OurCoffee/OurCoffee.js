import { Component } from 'react';
import './OurCoffee.scss';
import About from '../../About/About';
import photo from '../../../img/mask-group.png';

export default class OurCoffee extends Component {
  constructor() {
    super();
    this.state = {
      about: {
        id: 1,
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
    };
  }

  render() {
    const { about } = this.state;
    return (
      <section>
        <div className="container">
          <div className="info">
            <img src={photo} alt="CoolPhoto" />
            <About {...about} />
          </div>
        </div>
      </section>
    );
  }
}
