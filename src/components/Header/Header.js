import { Component } from 'react';
import propTypes from 'prop-types';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="container">
          {title}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: propTypes.string.isRequired,
};
