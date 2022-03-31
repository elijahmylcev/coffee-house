import React, { Component } from 'react';
import Header from '../Header/Header';
import CoffeeLine from '../CoffeeLine/CoffeeLine';

import './App.scss';
import Footer from '../Footer/Footer';
import MainPage from '../pages/MainPage/MainPage';
import OurCoffee from '../pages/OurCoffee/OurCoffee';
import ForYourPleasure from '../pages/ForYourPleasure/ForYourPleasure';
import Modal from '../Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: {
        status: false,
        element: {},
      },
      contentPage: [
        {
          id: 1,
          name: 'main',
          layout: (
            <div className="wrapperMain">
              <h1>Everything You Love About Coffee</h1>
              <CoffeeLine classInp="white" />
              <p className="description">
                We makes every day full of energy and taste
                <br />
                Want to try our beans?
              </p>
              <button type="button" onClick={() => this.changePage(2)} className="mainButton">More</button>
            </div>
          ),
          status: true,
          classes: 'header__main',
          mainLayout: (<MainPage
            onCurrentCardInMain={(elem, i) => this.onCurrentCardInMain(elem, i)}
          />),
        },
        {
          id: 2,
          name: 'ourCoffee',
          layout: (
            <h1 className="secondTitle">Our Coffee</h1>
          ),
          status: false,
          classes: 'header__ourCoffee',
          mainLayout: (<OurCoffee />),
        },
        {
          id: 3,
          name: 'forYourPleasure',
          layout: (<h1 className="secondTitle">For Your Pleasure</h1>),
          status: false,
          classes: 'header__forYourPleasure',
          mainLayout: (<ForYourPleasure />),
        },
      ],
      displayModal: false,
      onBuy: false,
    };
    this.changePage = this.changePage.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onCurrentCardInMain(elem) {
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

  changePage(index) {
    const number = Number(index);
    this.setState(({ contentPage }) => {
      contentPage.map((item) => {
        if (item.id === number) {
          item.status = true;
          return item;
        }
        item.status = false;
        return item;
      });
    }, this.forceUpdate);
  }

  render() {
    const {
      contentPage, displayModal, currentCard, onBuy,
    } = this.state;
    let content;
    contentPage.forEach((item) => {
      if (item.status) {
        content = item;
      }
    });

    return (
      <div className="App">
        <Header changePage={this.changePage} sendClass={content.classes} {...content} />
        <main>
          {content.mainLayout}
        </main>
        <Modal
          display={displayModal}
          title={currentCard.element.name}
          onCancel={this.cancelModal}
          onSubmit={this.onSubmit}
          card={currentCard.element}
          onBuy={onBuy}
        />
        <Footer changePage={this.changePage} />
      </div>
    );
  }
}
export default App;
