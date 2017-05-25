// page
import React, { Component } from 'react';
import styles from '../styles/index.css'
import Layout from './main'

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
