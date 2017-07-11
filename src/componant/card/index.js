import React, { Component } from 'react';
import styles from './index.css';

import CardHead from '../CardHead';
import Progress from '../Progress';
import CardBody from '../CardBody';
import CardFoot from '../CardFoot';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foot: this.props.footer
    };
  }

  toggleFoot() {
    this.setState({ foot: !this.state.foot });
  }

  render() {
    const { list } = this.props;
    return (
      <div className={styles.card}>
        <CardHead list={list} key={list.id} />
        <Progress />
        <div className={styles.body}>
          <CardBody />
          <button
            type="button"
            className={styles.edit}
            onClick={this.toggleFoot.bind(this)}>
            {this.state.foot ? 'Close' : 'Edit'}
          </button>
        </div>
        <div className={this.state.foot ? styles.foot : styles.footHidden}>
          <CardFoot />
        </div>
      </div>
    );
  }
}

export default Card;
