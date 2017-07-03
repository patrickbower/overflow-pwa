// page
import React, { Component } from "react";
import Layout from "./main";

import Icons from "../componant/Icons";
import reset from "../styles/reset.css";
import styles from "../styles/index.css";

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
