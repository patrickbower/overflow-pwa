import React, { Component } from "react";
import styles from "./index.css";

import CardHead from "../CardHead";
import Progress from "../Progress";
import CardBody from "../CardBody";
import CardFoot from "../CardFoot";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foot: false,
      listToDo: [],
      listDone: []
    };
  }

  toggleFoot() {
    this.setState({ foot: !this.state.foot });
  }

  sortLists() {
    const { cards } = this.props.payload;
    let doneArr = [];
    let todoArr = [];

    for (let card of cards) {
      if (card.labels.length === 0) {
        todoArr.push(card);
      } else if (card.labels[0].name === "done") {
        doneArr.push(card);
      }
    }

    return {
      listToDo: todoArr,
      listDone: doneArr
    };
  }

  render() {
    const { name, id } = this.props.payload;
    console.log(this.state);
    return (
      <div className={styles.card}>
        <CardHead title={name} id={id} />
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
