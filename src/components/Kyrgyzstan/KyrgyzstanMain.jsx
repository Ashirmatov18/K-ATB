import React, { useEffect } from "react";
import MainLayout from "../ui/MainLayout";
import VideoKg from "./VideoKg";
import styles from "../../../styles/Kyrgyzstan.module.css";
import Gallery from "./Gallery";
import News from "../News/News";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function KyrgyzstanMain() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <VideoKg />
      <MainLayout>
        <div className={styles.about_main_info}>
          <div className={styles.info_explore}>
            <h1
              data-aos="fade-down"
              style={{ color: "#333333", fontWeight: "500", fontSize: "50px" }}
            >
              Explore our world with us
            </h1>
            <span
              data-aos="fade-down"
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
          <div className={styles.about_sea} data-aos="fade-up"></div>
        </div>

        <div className={styles.info_img} data-aos="fade-down">
          <h1 style={{ color: "#333333", fontWeight: "500", fontSize: "50px" }}>
            Explore our world with us
          </h1>
          <span
            style={{ color: "#2F2F2F", fontSize: "24px" }}
            data-aos="fade-down"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ligula
            rhoncus, ut erat dictumst. Vitae non et <br /> scelerisque libero.
            Odio auctor ut tortor bibendum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quis <br /> ligula rhoncus, ut erat
            dictumst. Vitae non et scelerisque libero. Odio auctor ut tortor
            bibendum. <br /> <br /> Sapien nisl, turpis quam convallis morbi
            vel. Elit faucibus sit cras iaculis <br /> <br /> Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Quis ligula rhoncus, ut erat
            dictumst. Vitae non et <br /> scelerisque libero. Odio auctor ut
            tortor bibendum. <br /> Sapien nisl, turpis quam convallis morbi
            vel. Elit faucibus sit cras iaculis
          </span>
          <div className={styles.options} data-aos="fade-up">
            <div className={styles.bishkek}>
              <h1 className={styles.title}>Bishkek</h1>
            </div>
            <div className={styles.others}>
              <div className={styles.ala_osh}>
                <div className={styles.ala_archa}>
                  {" "}
                  <h1 className={styles.title}>Ala-Archa</h1>
                </div>
                <div className={styles.osh}>
                  {" "}
                  <h1 className={styles.title}>Osh</h1>
                </div>
              </div>
              <div className={styles.issyk_kul}>
                {" "}
                <h1 className={styles.title}>Issyk-Kul</h1>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
      <Gallery />
      <News />
      <Footer />
    </div>
  );
}
