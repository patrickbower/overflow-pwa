import React, { Component } from "react";
import styles from "./index.css";

class CardHead extends Component {
  render() {
    return (
      <div className={styles.head}>
        <h2 className={styles.title}>
          {this.props.list.name}
        </h2>
        <time className={styles.date}>Wednesday 17 May</time>
      </div>
    );
  }
}

export default CardHead;
