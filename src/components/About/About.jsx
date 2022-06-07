import React from "react";
import styles from "../../../styles/about.module.css";
import MainLayout from "../ui/MainLayout";
import News from "../News/News";
import Footer from "../Footer/Footer";
import ExpoSlider from "../Exploration/ExpoSlider";

export default function About() {
  return (
    <div className={styles.about_main}>
      <div className={styles.about_us}>
        <div className={styles.about_title}>
          <span>О нас</span>
        </div>
      </div>
      <MainLayout>
        <div className={styles.about_main_info}>
          <div className={styles.info_explore}>
            <h1
              style={{ color: "#333333", fontWeight: "500", fontSize: "50px" }}
            >
              Explore our world with us
            </h1>
            <span
              style={{ color: "#2F2F2F", fontSize: "32px", fontWeight: "500" }}
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Auctor proin tristique <br /> proin feugiat{" "}
            </span>
            <span style={{ color: "#2F2F2F", fontSize: "24px" }}>
              <br /> <br /> <br /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. <br /> Quis ligula rhoncus, ut erat dictumst.
              Vitae non et <br />
              scelerisque libero. Odio auctor ut tortor bibendum. <br />
              <br /> Sapien nisl, turpis quam convallis morbi vel. Elit <br />{" "}
              faucibus sit cras iaculis
            </span>
          </div>
          <div className={styles.about_img}></div>
        </div>

        <div>
          <h1
            style={{
              color: "#333333",
              fontWeight: "500",
              fontSize: "50px",
              paddingTop: "150px",
            }}
          >
            Explore our world with us
          </h1>
          <span style={{ color: "#2F2F2F", fontSize: "24px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ligula
            rhoncus, ut erat dictumst. Vitae non et <br /> scelerisque libero.
            Odio auctor ut tortor bibendum.{" "}
          </span>

          <div className={styles.about_stat}>
            <div className={styles.stat_info}>
              <h1>520</h1>
              <span>Lorem ipsum </span>
            </div>
            <div className={styles.stat_info}>
              <h1>720</h1>
              <span>Lorem ipsum </span>
            </div>
            <div className={styles.stat_info}>
              <h1>25</h1>
              <span>Lorem ipsum </span>
            </div>
            <div className={styles.stat_info}>
              <h1>100</h1>
              <span>Lorem ipsum </span>
            </div>
          </div>
        </div>
      </MainLayout>

      <ExpoSlider />
      <MainLayout>
        <div className={styles.about_text}>
          <h1
            style={{
              color: "#333333",
              fontWeight: "500",
              fontSize: "50px",
              paddingTop: "20px",
            }}
          >
            Explore our world with us
          </h1>
          <span style={{ color: "#2F2F2F", fontSize: "24px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ligula
            rhoncus, ut erat dictumst. Vitae non et <br /> scelerisque libero.
            Odio auctor ut tortor bibendum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quis <br /> ligula rhoncus, ut erat
            dictumst. Vitae non et scelerisque libero. Odio auctor ut tortor
            bibendum. <br /> <br /> <br /> Sapien nisl, turpis quam convallis
            morbi vel. Elit faucibus sit cras iaculis <br /> <br /> <br /> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Quis ligula
            rhoncus, ut erat dictumst. Vitae non et <br /> scelerisque libero.
            Odio auctor ut tortor bibendum. <br /> Sapien nisl, turpis quam
            convallis morbi vel. Elit faucibus sit cras iaculis
          </span>
        </div>
      </MainLayout>
      <News />
      <div className={styles.empty}></div>

      <Footer />
    </div>
  );
}
