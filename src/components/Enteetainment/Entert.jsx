import React from "react";
import styles from "../../../styles/enter.module.css";
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

export default function Entert() {
  return (
    <div>
      <div className={styles.main_guides}>
        <div className={styles.main_search}>
          <input type="text" className={styles.search} placeholder="Поиск" />
          <Search className={styles.search_icon} />
        </div>
        <div className={styles.about_title}>
          <span>РАЗВЛЕЧЕНИЯ</span>
        </div>
      </div>

      <MainLayout>
        <div className={styles.person_cards}>
          <div>
            <div className={styles.persons}>
              <div className={styles.first_per}></div>
              <div
                className={styles.person_info}
                onClick={() => {
                  setModal(true);
                }}
              >
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
            <div className={styles.persons_sec}>
              <div className={styles.sec_per}></div>
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
              <div
                className={styles.person_info}
                onClick={() => {
                  setModal(true);
                }}
              >
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
        <div>
          <div className={styles.persons_fourth}>
            <div className={styles.fou_per}></div>
            <div className={styles.person_info}>
              <h2 style={{ color: "#2F2F2F", fontSize: "24px" }}>
                Ministry of Foreign Affairs
              </h2>
              <div>
                <span className={styles.line}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </span>
              </div>
              <LineHeight style={{ marginTop: "20px", marginBottom: "20px" }} />
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
      </MainLayout>
    </div>
  );
}
