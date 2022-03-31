import Component from 'react';
import propTypes from 'prop-types';

class Children extends Component {
  render() {
    const { img, description, price } = this.props;
    return (
      <div className="childrenWrapper">
        <img src={img} alt="Element" className="childrenWrapper__img" />
        <div className="childrenWrapper__description">
          {' '}
          {description}
          {' '}
        </div>
        <div className="childrenWrapper__price">
          {' '}
          {price}
          {' '}
        </div>
      </div>
    );
  }
}

Children.propTypes = {
  img: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default Children;
