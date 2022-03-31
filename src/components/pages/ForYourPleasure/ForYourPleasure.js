import { Component } from 'react';
import './ForYourPleasure.scss';
import About from '../../About/About';
import photo from '../../../img/ForYouPleasure.png';
import ListOfCards from '../../ListOfCards/ListOfCards';
import Modal from '../../Modal/Modal';

export default class ForYourPleasure extends Component {
  constructor() {
    super();
    this.state = {
      about: {
        id: 3,
        title: 'About our goods',
        description: (
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br />
            {' '}
            <br />
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions.
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
          </p>
        ),
      },
      currentCard: {
        status: false,
        element: {},
      },
      displayModal: false,
      onBuy: false,
    };
    this.onCurrentCard = this.onCurrentCard.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }

  onCurrentCard(elem) {
    this.setState(({ currentCard }) => {
      currentCard.status = true;
      currentCard.element = elem;
    });
    this.setState({
      displayModal: true,
    });
  }

  onSubmit(e) {
    const { onBuy } = this.state;
    if (onBuy) {
      this.cancelModal(e);
    } else {
      this.setState({
        onBuy: true,
      });
    }
  }

  cancelModal(e) {
    const { onBuy } = this.state;
    if (e && (e.target.className === 'modalOverlay'
    || e.target.className === 'close'
    || e.target.className === 'modal__header_close')
    ) {
      this.setState({
        displayModal: false,
        onBuy: false,
      });
    }
    if (onBuy && e && (e.target.className === 'modalOverlay'
    || e.target.className === 'close'
    || e.target.className === 'modal__header_close'
    || e.target.className === 'submit')) {
      this.setState({
        displayModal: false,
        onBuy: false,
      });
    }
  }

  render() {
    const {
      displayModal, currentCard, onBuy, about,
    } = this.state;
    return (
      <section>
        <div className="container">
          <div className="info">
            <img src={photo} alt="CoolPhoto" />
            <About {...about} />
          </div>
          <div className="stroke" />
          <ListOfCards onCurrentCard={this.onCurrentCard} />
        </div>
        <Modal
          display={displayModal}
          title={currentCard.element.name}
          onCancel={this.cancelModal}
          onSubmit={this.onSubmit}
          card={currentCard.element}
          onBuy={onBuy}
        />
      </section>
    );
  }
}
