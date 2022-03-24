import { Component } from 'react';
import Header from '../Header/Header';
import CoffeeLine from '../CoffeeLine/CoffeeLine';

import './App.scss';
import About from '../About/About';
import Footer from '../Footer/Footer';
import OurBest from '../OurBesct/OurBest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contentHeader: [
        {
          id: 1,
          name: 'main',
          layout: (
            <div className="wrapperMain">
              <h1>Everything You Love About Coffee</h1>
              <CoffeeLine />
              <p>
                We makes every day full of energy and taste
                <br />
                Want to try our beans?
              </p>
              <button type="submit" className="mainButton">More</button>
            </div>
          ),
          status: true,
          classes: 'header__main',
        },
        {
          id: 2,
          name: 'ourCoffee',
          layout: (
            <h1 className="secondTitle">Our Coffee</h1>
          ),
          status: false,
          classes: 'header__ourCoffee',

        },
        {
          id: 3,
          name: 'forYourPleasure',
          layout: (<h1 className="secondTitle">For Your Pleasure</h1>),
          status: false,
          classes: 'header__forYourPleasure',

        },
      ],
      about: [
        {
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
      ],
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(index) {
    const number = Number(index);
    this.setState(({ contentHeader }) => {
      contentHeader.map((item) => {
        if (item.id === number) {
          item.status = true;
          return item;
        }
        item.status = false;
        return item;
      });
    }, this.forceUpdate);
  }

  render() {
    const { contentHeader } = this.state;
    let content;
    contentHeader.forEach((item) => {
      if (item.status) {
        content = item;
      }
    });

    const { about } = this.state;
    return (
      <div className="App">
        <Header changePage={this.changePage} sendClass={content.classes} {...content} />
        <About {...about[0]} />
        <OurBest />
        <Footer changePage={this.changePage} />
      </div>
    );
  }
}
export default App;
