import React, { Component } from "react";
import styles from "./index.css";

class CardBody extends Component {
  render() {
    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          Change money into euros
          <a href="#">
            <svg className={styles.iconTick}>
              <use xlinkHref="#icon-tick" />
            </svg>
          </a>
        </li>
        <li className={styles.item}>Virgin mobile in EU</li>
        <li className={styles.item}>Book car in France</li>
      </ul>
    );
  }
}

export default CardBody;
