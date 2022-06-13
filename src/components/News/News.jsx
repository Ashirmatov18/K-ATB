import React from "react";
import MainLayout from "../ui/MainLayout";
import styles from "../../../styles/News.module.css";
import { ReadMore } from "../Main/MainIcons";
import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function News() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.main_news} style={{ backgroundColor: "#F4F4F4" }}>
      <MainLayout>
        <div
          style={{ paddingTop: "100px" }}
          className={styles.kyrgyzstan}
          data-aos="fade-down"
        >
          <div>
            <h1>НОВОСТИ</h1>
            <span>Explore our world with us</span>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                proin tristique <br /> proin feugiat est ornare{" "}
              </p>
            </div>
            <Link href="/news" style={{ textDecoration: "none" }}>
              <div className={styles.but_article}>
                <button>More Articles</button>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.adv} data-aos="fade-down">
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
