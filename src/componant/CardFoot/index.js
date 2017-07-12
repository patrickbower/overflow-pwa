import React, { Component } from 'react';
import styles from './index.css';

class CardFoot extends Component {
  renderListItems(item, index) {
    return (
      <li className={styles.itemDone} key={index}>
        {item.name}
        <a href="#">
          <svg className={styles.iconClose}>
            <use xlinkHref="#icon-close" />
          </svg>
        </a>
      </li>
    );
  }
  render() {
    const { done } = this.props;
    return (
      <div>
        <h3 className={styles.section}>Compleate</h3>
        <ul className={styles.listDone}>
          {done.map((item, index) => this.renderListItems(item, index))}
        </ul>
        <h3 className={styles.section}>New</h3>
        <input className={styles.newInput} placeholder="Add new item" />
      </div>
    );
  }
}

export default CardFoot;
