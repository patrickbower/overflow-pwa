// page
import React, { Component } from "react";
import Layout from "./main";

/* eslint-disable */
import reset from "../styles/reset.css";
/* eslint-enable */
import styles from "../styles/index.css";
import Icons from "../componant/Icons";

class Page extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Icons />
        <Layout />
      </div>
    );
  }
}

export default Page;
