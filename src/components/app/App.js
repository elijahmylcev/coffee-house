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
            <div>
              <h1>Everything You Love About Coffee</h1>
              <CoffeeLine />
              <p>
                We makes every day full of energy and taste
                <br />
                Want to try our beans?
              </p>
              <button type="button">More</button>
            </div>
          ),
          status: true,
        },
        {
          id: 1,
          name: 'ourCoffee',
          layout: 'Our Coffee',
          status: false,
        },
        {
          id: 1,
          name: 'forYourPleasure',
          layout: 'For Your Pleasure',
          status: false,
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
    return (
      <div className="App">
        <Header {...content} />
      </div>
    );
  }
}
export default App;
