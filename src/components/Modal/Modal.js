import { Component } from 'react';
import propTypes from 'prop-types';
import './Modal.scss';

class Modal extends Component {
  render() {
    const {
      display, title, onCancel, onSubmit, children,
    } = this.props;

    if (display) {
      return (
        <div className="modalOverlay">
          <div className="container">
            <div className="modal">
              <div className="modal__header">
                <div className="modal__header_title">
                  {' '}
                  {title}
                  {' '}
                </div>
                <div
                  className="modal__header_close"
                  onClick={onCancel}
                  aria-hidden="true"
                >
                  &times;
                </div>
              </div>
              <div className="modal__body">{children}</div>
              <div className="modal__footer">
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="button" onClick={onSubmit}>Buy &#9749;</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      null
    );
  }
}

Modal.propTypes = {
  display: propTypes.bool,
  title: propTypes.string,
  onCancel: propTypes.func,
  onSubmit: propTypes.func,
  children: propTypes.node,
};

Modal.defaultProps = {
  display: false,
  title: 'Modal Title',
  onSubmit: () => {},
  onCancel: () => {},
  children: null,
};

export default Modal;
