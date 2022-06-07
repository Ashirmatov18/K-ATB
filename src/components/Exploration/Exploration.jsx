import React from "react";
import MainLayout from "../ui/MainLayout";
import styles from "../../../styles/Exploration.module.css";
import { ReadMore } from "../Main/MainIcons";
import ExpoSlider from "./ExpoSlider";

export default function Exploration() {
  // const logo = [
  //   {
  //     img: "first",
  //     title: "Travel Company",
  //   },
  //   { img: "2", title: "Travel Company" },
  //   { img: "3", title: "Travel Company" },
  //   { img: "4", title: "Travel Company" },
  //   { img: "5", title: "Travel Company" },
  // ];

  // const images = logo.map((image) => (
  //   <img
  //     key={image.img}
  //     src={require(`../../../public/images/${image.img}.jpg`)}
  //     alt=""
  //     className={styles.first__}
  //   />
  // ));

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

        {/* <div className={styles.carousel}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
          <div className={styles.third}></div>
        </div> */}
        <ExpoSlider />
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
            <div className={styles.arrow}>
              <ReadMore />
            </div>
          </div>

          <div className={styles.residents}>
            <div>
              <div className={styles.first_res}></div>
              <div className={styles.res_name}>
                <p>
                  Олжобай <br /> Ташполотов
                </p>
              </div>
            </div>
            <div>
              <div className={styles.second_res}></div>
              <div className={styles.res_name}>
                <p>
                  Дастан <br /> Дастанов
                </p>
              </div>
            </div>
            <div>
              <div className={styles.third_res}></div>
              <div className={styles.res_name}>
                <p>
                  Арина <br /> Загитова
                </p>
              </div>
            </div>
            <div>
              <div className={styles.fourth_res}></div>
              <div className={styles.res_name}>
                <p>
                  Дастан <br /> Дастанов
                </p>
              </div>
            </div>
            <div>
              <div className={styles.fifth_res}></div>
              <div className={styles.res_name}>
                <p>
                  Арина <br /> Загитова
                </p>
              </div>
            </div>
          </div>
        </div>

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
          </div>
          <div className={styles.read_more}>
            <p>Read more</p>
            <div className={styles.arrow}>
              <ReadMore />
            </div>
          </div>
          <div className={styles.residents}>
            <div>
              <div className={styles.first_logo}>
                {" "}
                <p className={styles.logo}>LOGO</p>
              </div>
              <div className={styles.res_name}>
                <p>Travel Company</p>
              </div>
            </div>
            <div>
              <div className={styles.first_logo}>
                {" "}
                <p className={styles.logo}>LOGO</p>
              </div>
              <div className={styles.res_name}>
                <p>Travel Company</p>
              </div>
            </div>
            <div>
              <div className={styles.first_logo}>
                <p className={styles.logo}>LOGO</p>
              </div>
              <div className={styles.res_name}>
                <p>Travel Company</p>
              </div>
            </div>
            <div>
              <div className={styles.first_logo}>
                {" "}
                <p className={styles.logo}>LOGO</p>
              </div>
              <div className={styles.res_name}>
                <p>Travel Company</p>
              </div>
            </div>
            <div>
              <div className={styles.first_logo}>
                {" "}
                <p className={styles.logo}>LOGO</p>
              </div>
              <div className={styles.res_name}>
                <p>Travel Company</p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
