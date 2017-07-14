import React, { Component } from 'react';
import styles from './index.css';

class CardFoot extends Component {
  onFormSubmit(event) {
    event.preventDefault();
    const listId = this.props.id;
    const title = this.newInput.value;
    this.props.putNewCard(listId, title);
    this.newInput.value = '';
  }

  deleteItem(event, card) {
    event.preventDefault();
    this.props.deleteCard(card.id, this.props.id);
  }

  renderListItems(doneList) {
    return Object.keys(doneList).map((key, index) => {
      return (
        <li className={styles.itemDone} key={index}>
          {doneList[key].name}
          <a
            href="#"
            onClick={event => {
              this.deleteItem(event, doneList[key]);
            }}>
            <svg className={styles.iconClose}>
              <use xlinkHref="#icon-close" />
            </svg>
          </a>
        </li>
      );
    });
  }

  render() {
    const { doneList } = this.props;
    return (
      <div>
        <h3 className={styles.section}>Compleate</h3>
        <ul className={styles.listDone}>
          {this.renderListItems(doneList)}
        </ul>
        <h3 className={styles.section}>New</h3>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input
            className={styles.newInput}
            placeholder="Add new item"
            ref={input => (this.newInput = input)}
          />
          <button type="submit" style={{ display: 'none' }} />
        </form>
      </div>
    );
  }
}

export default CardFoot;
