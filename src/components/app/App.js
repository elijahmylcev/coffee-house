import { Component } from 'react';
import Header from '../Header/Header';
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
    const { contentHeader } = this.state;
    return (
      <div className="App">
        <Header {...contentHeader.main} />
      </div>
    );
  }
}
export default App;
