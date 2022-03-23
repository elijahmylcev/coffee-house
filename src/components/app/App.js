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
              <button type="button" className="mainButton">More</button>
            </div>
          ),
          status: true,
          bg: '../../img/main-bg.png',
        },
        {
          id: 1,
          name: 'ourCoffee',
          layout: 'Our Coffee',
          status: false,
          bg: '../../img/OurCoffee-bg.png',
        },
        {
          id: 1,
          name: 'forYourPleasure',
          layout: 'For Your Pleasure',
          status: false,
          bg: '../../img/forYourPlesaure.png',
        },
      ],
    };
  }

  render() {
    const { contentHeader } = this.state;
    let content;
    contentHeader.forEach((item) => {
      if (item.status) {
        content = item;
      }
    });
    console.log(content.bg);
    return (
      <div className="App">
        <Header sendUrl={content.bg} {...content} />
      </div>
    );
  }
}
export default App;
