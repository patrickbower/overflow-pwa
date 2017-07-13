import React, { Component } from 'react';
import styles from './index.css';

class CardBody extends Component {
  renderListItem(item) {
    return Object.keys(item).map((key, index) => {
      return (
        <li className={styles.item} key={index}>
          {item[key].name}
          <a href="#">
            <svg className={styles.iconTick}>
              <use xlinkHref="#icon-tick" />
            </svg>
          </a>
        </li>
      );
    });
  }

  render() {
    const { todo } = this.props;
    return (
      <ul className={styles.list}>
        {this.renderListItem(todo)}
      </ul>
    );
  }
}

export default CardBody;
