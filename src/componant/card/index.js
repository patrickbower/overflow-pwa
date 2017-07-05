import React, { Component } from "react";
import styles from "./index.css";

import CardHead from "../CardHead";
import Progress from "../Progress";
import CardBody from "../CardBody";
import CardFoot from "../CardFoot";

class Card extends Component {
  constructor(props) {
    super(props);

    // console.log("list payload", this.props.payload);

    this.state = {
      foot: false
    };
  }

  toggleFoot() {
    this.setState({ foot: !this.state.foot });
  }

  render() {
    const { name, id } = this.props.payload;
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
