import React, { Component } from 'react';
import styles from './index.css';

import CardHead from '../CardHead';
import Progress from '../Progress';
import CardBody from '../CardBody';
import CardFoot from '../CardFoot';

import * as middleware_todo from '../../middleware/todo';
import * as middleware_done from '../../middleware/done';
import * as middleware_card from '../../middleware/card';
import * as middleware_delete from '../../middleware/delete';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foot: this.props.footer,
      todoList: {},
      doneList: {}
    };

    this.putNewCard.bind(this);
  }

  toggleFoot() {
    this.setState({ foot: !this.state.foot });
  }

  async getChildData() {
    const todoList = await middleware_todo.get(this.props.list.id);
    const doneList = await middleware_done.get(this.props.list.id);

    this.setState({
      todoList: todoList,
      doneList: doneList
    });
  }

  async putNewCard(listId, title) {
    const newCard = await middleware_card.put(listId, title);
    this.setState({
      todoList: Object.assign(this.state.todoList, newCard)
    });
  }

  async deleteCard(cardId, listId) {
    await middleware_delete.remove(cardId, listId);
    this.removeItem(cardId);
  }

  removeItem(cardId) {
    this.setState({
      doneList: delete this.state.doneList[cardId]
    });
  }

  componentDidMount() {
    this.getChildData();
  }

  render() {
    const { list } = this.props;
    const { todoList, doneList } = this.state;

    return (
      <div className={styles.card}>
        <CardHead list={list} key={list.id} />
        <Progress />
        <div className={styles.body}>
          <CardBody todoList={todoList} />
          <button
            type="button"
            className={styles.edit}
            onClick={this.toggleFoot.bind(this)}>
            {this.state.foot ? 'Close' : 'Edit'}
          </button>
        </div>
        <div className={this.state.foot ? styles.foot : styles.footHidden}>
          <CardFoot
            doneList={doneList}
            putNewCard={this.putNewCard.bind(this)}
            deleteCard={this.deleteCard.bind(this)}
            id={list.id}
          />
        </div>
      </div>
    );
  }
}

export default Card;
