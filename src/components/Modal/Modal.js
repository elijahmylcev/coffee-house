import { Component } from 'react';
import propTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);
    const { display } = props;
    this.state = {
      display,
    };
  }

  render() {
    const { display } = this.state;
    if (display) {
      return (
        <h1>Hello Modal</h1>
      );
    }
    return (
      null
    );
  }
}

Modal.propTypes = {
  display: propTypes.bool,
};

Modal.defaultProps = {
  display: false,
};

export default Modal;
