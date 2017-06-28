import React, { Component } from "react";
import styles from "./index.css";
import icons from "../../index.css";

class Card extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.head}>
          <h2 className={styles.title}>Holiday</h2>
          <time className={styles.date}>Wednesday 17 May</time>
        </div>
        <div className={styles.progress} />
        <div className={styles.body}>
          <ul className={styles.list}>
            <li className={styles.item}>Change money into euros</li>
            <li className={styles.item}>Virgin mobile in EU</li>
            <li className={styles.item}>Book car in France</li>
          </ul>
          <button type="button" className={styles.edit}>Edit</button>
        </div>

        <div className={styles.foot}>
          <h3 className={styles.section}>Compleate</h3>
          <ul className={styles.list}>
            <li className={styles.item}>Book flights</li>
            <li className={styles.item}>Print docs</li>
            <li className={styles.item}>Buy flip flops</li>
          </ul>
          <h3 className={styles.section}>New</h3>
          <input className={styles.newInput} placeholder="Add new item" />
        </div>

      </div>
    );
  }
}

export default Card;
