import { Component } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contentHeader: {
        main: {
          id: 1,
          title: 'Everything You Love About Coffee',
        },
      },
    };
  }

  render() {
    const { contentHeader, buttons } = this.state;
    return (
      <div className="App">
        <Navigation {...buttons} />
        <Header {...contentHeader.main} />
      </div>
    );
  }
}
export default App;
