import React, { Component } from 'react';
import styles from './index.css';

class Card extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className="test">
          card
        </div>
      </div>
    );
  }
}

export default Card;
