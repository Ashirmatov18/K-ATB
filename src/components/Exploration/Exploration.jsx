import React from "react";
import MainLayout from "../ui/MainLayout";
import styles from "../../../styles/Exploration.module.css";
import { ReadMore } from "../Main/MainIcons";

export default function Exploration() {
  return (
    <div style={{ marginTop: "150px" }}>
      <div className={styles.back_styles}>
        <MainLayout>
          <div className={styles.kyrgyzstan}>
            <div>
              <h1>KYRGYZSTAN</h1>
              <span>Explore our world with us</span>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor proin tristique <br /> proin feugiat est ornare{" "}
                </p>
              </div>
            </div>
            <div className={styles.click}>
              <button>Click me</button>
            </div>
          </div>
        </MainLayout>

        <div className={styles.carousel}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
          <div className={styles.third}></div>
        </div>
      </div>

      <MainLayout>
        <div style={{ paddingTop: "100px" }} className={styles.kyrgyzstan}>
          <div>
            <h1>ГИДЫ</h1>
            <span>Explore our world with us</span>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                proin tristique <br /> proin feugiat est ornare{" "}
              </p>
            </div>
          </div>
          <div className={styles.read_more}>
            <p>Read more</p>
            <div
              styles={{
                paddingTop: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ReadMore />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
