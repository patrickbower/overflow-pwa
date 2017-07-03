import React, { Component } from "react";
import styles from "./index.css";

class CardFoot extends Component {
  render() {
    return (
      <div>
        <h3 className={styles.section}>Compleate</h3>
        <ul className={styles.listDone}>
          <li className={styles.itemDone}>
            Book flights
            <a href="#">
              <svg className={styles.iconClose}>
                <use xlinkHref="#icon-close" />
              </svg>
            </a>
          </li>
          <li className={styles.itemDone}>
            Print docs
            <a href="#">
              <svg className={styles.iconClose}>
                <use xlinkHref="#icon-close" />
              </svg>
            </a>
          </li>
          <li className={styles.itemDone}>
            Buy flip flops
            <a href="#">
              <svg className={styles.iconClose}>
                <use xlinkHref="#icon-close" />
              </svg>
            </a>
          </li>
        </ul>
        <h3 className={styles.section}>New</h3>
        <input className={styles.newInput} placeholder="Add new item" />
      </div>
    );
  }
}

export default CardFoot;
