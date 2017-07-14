import React, { Component } from 'react';
import styles from './index.css';

class CardBody extends Component {
  compleate(event, card) {
    event.preventDefault();
    this.props.compleateItem(card);
  }

  renderListItem(todoList) {
    return Object.keys(todoList).map(key => {
      return (
        <li className={styles.item} key={todoList[key].id}>
          {todoList[key].name}
          <a
            href="#"
            onClick={event => {
              this.compleate(event, todoList[key]);
            }}>
            <svg className={styles.iconTick}>
              <use xlinkHref="#icon-tick" />
            </svg>
          </a>
        </li>
      );
    });
  }

  render() {
    const { todoList } = this.props;
    return (
      <ul className={styles.list}>
        {this.renderListItem(todoList)}
      </ul>
    );
  }
}

export default CardBody;
