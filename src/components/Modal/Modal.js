import { Component } from 'react';
import propTypes from 'prop-types';
import './Modal.scss';

class Modal extends Component {
  render() {
    const {
      display, title, onCancel, onSubmit, card, onBuy,
    } = this.props;

    let children;

    if (onBuy) {
      children = (
        <form className="childrenWrapper" action="submit">
          <input className="childrenWrapper__input" type="text" placeholder="name..." />
          <input className="childrenWrapper__input" type="text" placeholder="email..." />
          <div className="childrenWrapper__price">
            {' '}
            {`${card.price}$`}
            {' '}
          </div>
        </form>
      );
    } else {
      children = (
        <div className="childrenWrapper">
          <img src={card.img} alt="Element" className="childrenWrapper__img" />
          <div className="childrenWrapper__description">
            {' '}
            {card.description}
            {' '}
          </div>
          <div className="childrenWrapper__price">
            {' '}
            {`${card.price}$`}
            {' '}
          </div>
        </div>
      );
    }

    if (display) {
      return (
        <div
          className="modalOverlay"
          onClick={onCancel}
          aria-hidden="true"
        >
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
                <button type="button" className="close" onClick={onCancel}>Cancel</button>
                <button type="button" className="submit" onClick={onSubmit}>Buy &#9749;</button>
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
  onBuy: propTypes.bool,
  title: propTypes.string,
  onCancel: propTypes.func,
  onSubmit: propTypes.func,
  card: propTypes.func,
};

Modal.defaultProps = {
  display: false,
  onBuy: false,
  title: 'Modal Title',
  onSubmit: () => {},
  onCancel: () => {},
  card: () => {},
};

export default Modal;
