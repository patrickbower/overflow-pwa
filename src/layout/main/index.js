import React, { Component } from 'react';
import styles from './index.css';

import Card from '../../componant/card'

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Card />
      </div>
    );
  }
}

export default Main;
