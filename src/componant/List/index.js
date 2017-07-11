import React, { Component } from 'react';
import styles from './index.css';

import Card from '../../componant/Card';
import * as middleware from '../../middleware/listName';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    };
  }

  async getData() {
    const lists = await middleware.listName();
    this.setState({ lists: lists });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.lists.length) {
      return (
        <div className={styles.container}>
          {this.state.lists.map(list =>
            <Card list={list} footer={false} key={list.id} />
          )}
        </div>
      );
    } else {
      return <p>loading</p>;
    }
  }
}

export default List;
