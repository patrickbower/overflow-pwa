import React, { Component } from 'react';
import styles from './index.css';

class CardBody extends Component {
  renderListItem(item, index) {
    return (
      <li className={styles.item} key={index}>
        {item.name}
        <a href="#">
          <svg className={styles.iconTick}>
            <use xlinkHref="#icon-tick" />
          </svg>
        </a>
      </li>
    );
  }

  render() {
    const { todo } = this.props;
    return (
      <ul className={styles.list}>
        {todo.map((item, index) => this.renderListItem(item, index))}
      </ul>
    );
  }
}

export default CardBody;
