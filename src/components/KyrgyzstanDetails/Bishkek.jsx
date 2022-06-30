import React from "react";
import styles from "../../../styles/Kyrgyzstan.module.css";

export default function Bishkek() {
  return (
    <div
      style={{
        marginBottom: "150px !important",
      }}
    >
      <h1 className={styles.bish_title}>Бишкек</h1>
      <div
        style={{
          height: "800px",
          margin: "0 auto",
        }}
        className={styles.bishkeek}
      ></div>
    </div>
  );
}
