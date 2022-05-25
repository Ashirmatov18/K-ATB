import React from "react";
import styles from "../../../styles/ui/_main-layout.module.scss";

function MainLayout({ children }) {
  return <div className={styles.mainWrapper}>{children}</div>;
}

export default MainLayout;
