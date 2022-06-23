import { Search } from "../OrderCars/OrderCarsSvg";
import React, { useEffect } from "react";
import styles from "../../../styles/newsPage.module.css";
import MainLayout from "../ui/MainLayout";
import { ReadMore } from "../Main/MainIcons";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MainNews() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div className={styles.about_title} data-aos="fade-down">
          <span>НОВОСТИ</span>
        </div>
      </div>
      <MainLayout>
        <div style={{ paddingTop: "150px" }} className={styles.kyrgyzstan}>
          <div data-aos="fade-up">
            <span>Explore our world with us</span>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                ligula rhoncus, ut erat dictumst. Vitae non et <br />{" "}
                scelerisque libero. Odio auctor ut tortor bibendum. Sapien nisl,
                turpis quam convallis morbi vel. Elit faucibus sit <br /> cras
                iaculis
              </p>
            </div>
          </div>
        </div>
        <div className={styles.adv}>
          <div className={styles.info_detail} data-aos="fade-up">
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

          <div className={styles.info_detail} data-aos="fade-down">
            <div className={styles.picture_sec}></div>
            <div className={styles.pic_info}>
              <h1>Lorem ipsum dolor </h1>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br />
                Condimentum phasellus venenatis <br /> ornare mi et. Id
                porttitor diam eget <br /> cursus nisi, vestibulum
              </p>
              <Link href="/newsdetail">
                <div className={styles.read_more}>
                  <p>Read more</p>
                  <div className={styles.arrow}>
                    <ReadMore />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.info_detail} data-aos="fade-up">
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

          <div className={styles.info_detail} data-aos="fade-down">
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
