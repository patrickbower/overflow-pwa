import React, { Component } from "react";
import styles from "./index.css";

import Card from "../../componant/Card";
import * as trello from "../../utils/trello";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: null
    };

    this.getAllCards();
  }

  getAllCards() {
    trello.request(
      trello.query(trello.get.all),
      this.returnAllCards.bind(this)
    );
  }

  returnAllCards(payload) {
    this.setState({ cards: payload });
  }

  thing() {
    this.state.cards.map(function(card) {
      return card;
    });
  }

  render() {
    // console.log("this.state.cards", this.state.cards);
    // console.log(this.thing());

    if (this.state.cards === null) {
      return <p>loading</p>;
    } else {
      return (
        <div className={styles.main}>
          <Card />
        </div>
      );
    }
  }
}

export default Main;
