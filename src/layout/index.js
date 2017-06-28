// page
import React, { Component } from 'react';
import Layout from './main'

import reset from '../styles/reset.css'
import styles from '../styles/index.css'

class Page extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Layout />
      </div>
    );
  }
}

export default Page;
