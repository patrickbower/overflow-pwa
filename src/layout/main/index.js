import React, { Component } from 'react';
import styles from './index.css';

import List from '../../componant/List';

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <List />
      </div>
    );
  }
}

export default Main;
