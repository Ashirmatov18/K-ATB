import React from "react";
import MainLayout from "../ui/MainLayout";
import styles from "../../../styles/News.module.css";
import { ReadMore } from "../Main/MainIcons";

export default function News() {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <MainLayout>
        <div style={{ paddingTop: "100px" }} className={styles.kyrgyzstan}>
          <div>
            <h1>ТУРФИРМЫ</h1>
            <span>Explore our world with us</span>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                proin tristique <br /> proin feugiat est ornare{" "}
              </p>
            </div>
            <div>
              <button>More Articles</button>
            </div>
          </div>
        </div>
        <div className={styles.adv}>
          <div className={styles.info_detail}>
            <div className={styles.picture_first}></div>
            <div className={styles.pic_info}>
              <h1>Lorem ipsum dolor </h1>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br />
                Condimentum phasellus venenatis <br /> ornare mi et. Id
                porttitor diam eget <br /> cursus nisi, vestibulum
              </p>
              <div className={styles.read_more}>
                <p>Read more</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info_detail}>
            <div className={styles.picture_sec}></div>
            <div className={styles.pic_info}>
              <h1>Lorem ipsum dolor </h1>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br />
                Condimentum phasellus venenatis <br /> ornare mi et. Id
                porttitor diam eget <br /> cursus nisi, vestibulum
              </p>
              <div className={styles.read_more}>
                <p>Read more</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info_detail}>
            <div className={styles.picture_third}></div>
            <div className={styles.pic_info}>
              <h1>Lorem ipsum dolor </h1>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br />
                Condimentum phasellus venenatis <br /> ornare mi et. Id
                porttitor diam eget <br /> cursus nisi, vestibulum
              </p>
              <div className={styles.read_more}>
                <p>Read more</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info_detail}>
            <div className={styles.picture_fourth}></div>
            <div className={styles.pic_info}>
              <h1>Lorem ipsum dolor </h1>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br />
                Condimentum phasellus venenatis <br /> ornare mi et. Id
                porttitor diam eget <br /> cursus nisi, vestibulum
              </p>
              <div className={styles.read_more}>
                <p>Read more</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
