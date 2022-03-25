import { Component } from 'react';
import './SearchPanel.scss';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      filterButtons: [
        { id: 1, name: 'All', status: false },
        { id: 2, name: 'Brazil', status: false },
        { id: 3, name: 'Kenya', status: false },
        { id: 4, name: 'Columbia', status: false },
      ],
    };
  }

  render() {
    const { filterButtons } = this.state;
    const elements = filterButtons.map((item) => (
      <button
        className="filter__buttons_element"
        type="button"
        key={item.id}
      >
        {item.name}
      </button>
    ));
    return (
      <section>
        <div className="container">
          <div className="filter">
            <div className="filter__search">
              <div className="filter__search_name">Looking for</div>
              <input
                type="text"
                className="filter__search_input"
                placeholder="start typing here..."
              />
            </div>
            <div className="filter__buttons">
              <div className="filter__search_name">Or filter</div>
              {elements}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
