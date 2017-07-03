import React, { Component } from "react";
import styles from "./index.css";

import CardHead from "../CardHead";
import Progress from "../Progress";
import CardBody from "../CardBody";
import CardFoot from "../CardFoot";

import * as trello from "../../utils/trello";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foot: false,
      cards: null
    };

    this.getAllCards();
  }

  toggleFoot() {
    this.setState({ foot: !this.state.foot });
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

  render() {
    return (
      <div className={styles.card}>
        <CardHead />
        <Progress />
        <div className={styles.body}>
          <CardBody />
          <button
            type="button"
            className={styles.edit}
            onClick={this.toggleFoot.bind(this)}
          >
            {this.state.foot ? "Close" : "Edit"}
          </button>
        </div>
        <div className={this.state.foot ? styles.foot : styles.footHidden}>
          <CardFoot />
        </div>
      </div>
    );
  }
}

export default Card;
