import { Component } from 'react';
import Header from '../Header/Header';
import CoffeeLine from '../CoffeeLine/CoffeeLine';

import './App.scss';

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
            <h1>Our Coffee</h1>
          ),
          status: false,
          classes: 'header__ourCoffee',

        },
        {
          id: 3,
          name: 'forYourPleasure',
          layout: (<h1>For Your Pleasure</h1>),
          status: false,
          classes: 'header__forYourPleasure',

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
          console.log(item.status, item.id);
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
        console.log(item);
        content = item;
      }
    });
    return (
      <div className="App">
        <Header changePage={this.changePage} sendClass={content.classes} {...content} />
      </div>
    );
  }
}
export default App;
