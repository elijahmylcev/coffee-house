import { Component } from 'react';
import Header from '../Header/Header';
import CoffeeLine from '../CoffeeLine/CoffeeLine';

import './App.scss';
import Footer from '../Footer/Footer';
import MainPage from '../pages/MainPage/MainPage';
import OurCoffee from '../pages/OurCoffee/OurCoffee';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contentPage: [
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
          mainLayout: (<MainPage />),
        },
        {
          id: 2,
          name: 'ourCoffee',
          layout: (
            <h1 className="secondTitle">Our Coffee</h1>
          ),
          status: false,
          classes: 'header__ourCoffee',
          mainLayout: (<OurCoffee />),
        },
        {
          id: 3,
          name: 'forYourPleasure',
          layout: (<h1 className="secondTitle">For Your Pleasure</h1>),
          status: false,
          classes: 'header__forYourPleasure',
          mainLayout: (<p>Hello</p>),
        },
      ],
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(index) {
    const number = Number(index);
    this.setState(({ contentPage }) => {
      contentPage.map((item) => {
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
    const { contentPage } = this.state;
    let content;
    contentPage.forEach((item) => {
      if (item.status) {
        content = item;
      }
    });

    return (
      <div className="App">
        <Header changePage={this.changePage} sendClass={content.classes} {...content} />
        <main>
          {content.mainLayout}
        </main>
        <Footer changePage={this.changePage} />
      </div>
    );
  }
}
export default App;
