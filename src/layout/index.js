// page
import React, { Component } from "react";
import Layout from "./main";

// eslint-disable-next-line
import reset from "../styles/reset.css";

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
