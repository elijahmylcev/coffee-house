import { Component } from 'react';
import propTypes from 'prop-types';
import './SearchPanel.scss';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      filterButtons: [
        { id: 1, name: 'All', status: true },
        { id: 2, name: 'Brazil', status: false },
        { id: 3, name: 'Kenya', status: false },
        { id: 4, name: 'Columbia', status: false },
      ],
    };
  }

  onClickFilter(name, id) {
    const { changeFilter } = this.props;
    this.setState(({ filterButtons }) => {
      filterButtons.map((item) => {
        if (item.id !== id) {
          item.status = false;
          return item;
        }
        item.status = true;
        return item;
      });
    });
    changeFilter(name);
  }

  render() {
    const { filterButtons } = this.state;
    const elements = filterButtons.map((item) => {
      let classList = 'filter__buttons_element';
      if (item.status) {
        classList += ' active';
      }
      return (
        <button
          className={classList}
          type="button"
          key={item.id}
          onClick={() => this.onClickFilter(item.name, item.id)}
        >
          {item.name}
        </button>
      );
    });
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

SearchPanel.propTypes = {
  changeFilter: propTypes.func.isRequired,
};
