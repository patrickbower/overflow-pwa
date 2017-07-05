import React, { Component } from "react";
import styles from "./index.css";

import * as trello from "../../utils/trello";

class CardHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
    this.getListDate();
  }

  getListDate() {
    const { id } = this.props;
    trello.request(
      trello.query(trello.getDateLastActivity(id)),
      this.returnListDate.bind(this)
    );
  }

  returnListDate(payload) {
    const value = new Date(1000 * parseInt(this.props.id.substring(0, 8), 16));

    var day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    // month
    var month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    this.setState({
      date:
        day[value.getDay()] +
        " " +
        value.getDate() +
        " " +
        month[value.getMonth()]
    });
  }

  render() {
    return (
      <div className={styles.head}>
        <h2 className={styles.title}>
          {this.props.title}
        </h2>
        <time className={styles.date}>
          {this.state.date}
        </time>
      </div>
    );
  }
}

export default CardHead;
