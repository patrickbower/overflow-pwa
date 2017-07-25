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
import * as middleware_compleate from '../../middleware/compleate';

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

  async putNewCard(listId, title) {
    const newCard = await middleware_card.put(listId, title);
    this.setState({
      todoList: Object.assign(this.state.todoList, newCard)
    });
  }

  async deleteCard(cardId, listId) {
    await middleware_delete.deleteMethod(cardId, listId);
    this.removeItem(cardId);
  }

  removeItem(cardId) {

    let newDoneList = this.state.doneList;
    delete this.state.doneList[cardId];

    this.setState({
      doneList: newDoneList
    });
  }

  async compleateItem(card) {
    await middleware_compleate.compleate(card.id);
    this.changeItem(card);
  }

  changeItem(card) {
    const completedCard = {};
    completedCard[card.id] = card;

    let newTodoList = this.state.todoList;
    delete this.state.todoList[card.id];

    let newDoneList = this.state.doneList;
    Object.assign(newDoneList, completedCard);

    this.setState({
      todoList: newTodoList,
      doneList: newDoneList
    });
  }

  async getChildData() {
    const todoList = await middleware_todo.getMethod(this.props.list.id);
    const doneList = await middleware_done.getMethod(this.props.list.id);

    this.setState({
      todoList: todoList,
      doneList: doneList
    });
  }

  componentDidMount() {
    this.getChildData();
  }

  progress() {
    const done = Object.keys(this.state.doneList).length;
    const todo = Object.keys(this.state.todoList).length
    const total = todo + done;
    return Math.floor(done / total * 100);
  }

  render() {
    const { list } = this.props;
    const { todoList, doneList } = this.state;
    const progress = this.progress();

    return (
      <div className={styles.card}>
        <CardHead list={list} key={list.id} />
        <Progress progress={progress}/>
        <div className={styles.body}>
          <CardBody
            todoList={todoList}
            compleateItem={this.compleateItem.bind(this)}
          />
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
