import React from "react";
import styles from "../../../styles/Footer.module.css";
import MainLayout from "../ui/MainLayout";

export default function Footer() {
  return (
    <div>
      <div style={{ backgroundColor: "#000", color: "#fff" }}>
        <MainLayout>
          <div className={styles.horse_section}>
            <h1>
              Subscribe To Get The Latest News <br /> About Us
            </h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                proin tristique <br /> proin feugiat est ornare{" "}
              </p>
            </div>
            <form className={styles.form} action="">
              <input
                className={styles.confirm_inp}
                type="text"
                name=""
                id=""
                placeholder="E-mail"
              />
              <button className={styles.confirm_but}>Send</button>
            </form>
          </div>
        </MainLayout>
      </div>
      <footer className={styles.footer_info}></footer>
    </div>
  );
}
