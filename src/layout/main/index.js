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
      trello.query(trello.getAll()),
      this.returnAllCards.bind(this)
    );
  }

  returnAllCards(payload) {
    this.setState({ cards: payload });
  }

  render() {
    if (this.state.cards === null) {
      return <p>loading</p>;
    } else {
      return (
        <div className={styles.main}>
          {this.state.cards.map(card => <Card key={card.id} payload={card} />)}
        </div>
      );
    }
  }
}

export default Main;
