import React, { Component } from "react";
import styles from "./index.css";

class Progress extends Component {


  render() {
    const { progress } = this.props;
    return (
      <div className={styles.bar}>
        <div className={styles.progress} style={{width: `${progress}%`}} />
      </div>
    )
  }
}

export default Progress;
