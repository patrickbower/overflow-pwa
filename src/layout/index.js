// page
import React, { Component } from "react";
import Layout from "./main";

/* eslint-disable */
import reset from "../styles/reset.css";
/* eslint-enable */

import styles from "../styles/index.css";
import IconSprite from "../componant/IconSprite";

class Page extends Component {
  render() {
    return (
      <div className={styles.root}>
        <IconSprite />
        <Layout />
      </div>
    );
  }
}

export default Page;
