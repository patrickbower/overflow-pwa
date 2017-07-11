import React, { Component } from 'react';
import styles from './index.css';

import decodeDate from '../../utils/date';

class CardHead extends Component {
  render() {
    const { id, name } = this.props.list;
    return (
      <div className={styles.head}>
        <h2 className={styles.title}>
          {name}
        </h2>
        <time className={styles.date}>
          {decodeDate(id)}
        </time>
      </div>
    );
  }
}

export default CardHead;
