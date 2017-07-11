import React, { Component } from "react";
import styles from "./index.css";

import CardHead from "../CardHead";
import Progress from "../Progress";
import CardBody from "../CardBody";
import CardFoot from "../CardFoot";

import * as middleware from "../../middleware/listName";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foot: false,
      lists: []
    };
  }

  toggleFoot() {
    this.setState({ foot: !this.state.foot });
  }

  async getData() {
    const lists = await middleware.listName();
    this.setState({ lists: lists });
  }

  componentDidMount() {
    this.getData();
  }

  // if (this.state.cards === null) {
  //   return <p>loading</p>;
  // } else {
  //   return (
  //     <div className={styles.main}>
  //       {this.state.cards.map(card => <Card key={card.id} payload={card} />)}
  //     </div>
  //   );
  // }

  renderCard(list) {
    return (
      <div className={styles.card} key={list.id}>
        <CardHead list={list} />
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

  render() {
    if (this.state.lists.length) {
      return (
        <div>
          {this.state.lists.map(list => this.renderCard(list))}
        </div>
      );
    } else {
      return <p>loading</p>;
    }
  }
}

export default Card;
