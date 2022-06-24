import React, { useEffect } from "react";
import styles from "../../../styles/partners.module.css";
import {
  Email,
  Facebook,
  Insta,
  LineHeight,
  Mobile,
  Search,
  Whats,
} from "../OrderCars/OrderCarsSvg";
import MainLayout from "../ui/MainLayout";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Partners() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className={styles.main_guides}>
        <div data-aos="fade-down" className={styles.about_title}>
          <span>ПАРТНЕРЫ</span>
        </div>
      </div>
      <MainLayout>
        <div
          style={{ paddingTop: "150px" }}
          className={styles.kyrgyzstan}
          data-aos="fade-up"
        >
          <div>
            <span>Наши партнеры</span>
            <div>
              <p>
                Никогда не садитесь за руль в Кыргызстане, если не уверены в
                себе. Потомки кочевников лихачат круче, чем это делают в Грузии
                а вы же наверняка слышали про грузинских водителей. Есть
                легенда, согласно которой
              </p>
            </div>
          </div>
        </div>
        <div className={styles.person_cards} data-aos="fade-down">
          <div>
            <div className={styles.persons}>
              <div className={styles.ex}>
                <div className={styles.first_per}></div>
              </div>
              <div className={styles.person_info}>
                <h2 style={{ color: "#2F2F2F", fontSize: "24px" }}>
                  Emblem of Qatar
                </h2>
                <div>
                  <span className={styles.line}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
                <LineHeight
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                />
                <div className={styles.per_social}>
                  <div className={styles.per_mobile}>
                    <Mobile />
                    <span
                      style={{
                        marginLeft: "10px",
                        color: "#A4A8B4",
                        fontSize: "17px",
                      }}
                    >
                      +996 444 444
                    </span>
                  </div>
                  <div>
                    <Facebook className={styles.social_media} />
                    <Insta className={styles.social_media} />
                    <Whats />
                  </div>
                </div>
                <div className={styles.email}>
                  <Email />
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "#A4A8B4",
                      fontSize: "17px",
                    }}
                  >
                    tashpolotov@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.persons}>
              <div className={styles.ex}>
                <div className={styles.sec_per}></div>
              </div>
              <div className={styles.person_info}>
                <h2 style={{ color: "#2F2F2F", fontSize: "24px" }}>
                  Ministry of Foreign Affairs
                </h2>
                <div>
                  <span className={styles.line}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
                <LineHeight
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                />
                <div className={styles.per_social}>
                  <div className={styles.per_mobile}>
                    <Mobile />
                    <span
                      style={{
                        marginLeft: "10px",
                        color: "#A4A8B4",
                        fontSize: "17px",
                      }}
                    >
                      +996 444 444
                    </span>
                  </div>
                  <div>
                    <Facebook className={styles.social_media} />
                    <Insta className={styles.social_media} />
                    <Whats />
                  </div>
                </div>
                <div className={styles.email}>
                  <Email />
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "#A4A8B4",
                      fontSize: "17px",
                    }}
                  >
                    tashpolotov@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.persons}>
              <div className={styles.ex}>
                <div className={styles.th_per}></div>
              </div>
              <div className={styles.person_info}>
                <h2 style={{ color: "#2F2F2F", fontSize: "24px" }}>
                  Department of Tourism
                </h2>
                <div>
                  <span className={styles.line}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
                <LineHeight
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                />
                <div className={styles.per_social}>
                  <div className={styles.per_mobile}>
                    <Mobile />
                    <span
                      style={{
                        marginLeft: "10px",
                        color: "#A4A8B4",
                        fontSize: "17px",
                      }}
                    >
                      +996 444 444
                    </span>
                  </div>
                  <div>
                    <Facebook className={styles.social_media} />
                    <Insta className={styles.social_media} />
                    <Whats />
                  </div>
                </div>
                <div className={styles.email}>
                  <Email />
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "#A4A8B4",
                      fontSize: "17px",
                    }}
                  >
                    tashpolotov@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
