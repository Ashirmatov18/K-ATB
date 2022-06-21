import React, { useState } from "react";
import MainLayout from "../ui/MainLayout";
import styles from "../../../styles/Exploration.module.css";
import { ReadMore } from "../Main/MainIcons";
import ExpoSlider from "./ExpoSlider";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Exploration() {
  // const [state, toggle] = useState(true);
  // const { x } = useSpring({
  //   from: { x: 0 },
  //   x: state ? 1 : 0,
  //   config: { duration: 1000 },
  // });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
            {/* <div className={styles.click}>
              <button>Click me</button>
            </div> */}
            <Link href="/kyrgyzstan" style={{ textDecoration: "none" }}>
              {/* <div className={styles.click} onClick={() => toggle(!state)}>
                <animated.div
                  className={styles.click_but}
                  style={{
                    opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                    scale: x.to({
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                    }),
                  }}
                >
                  Click Me
                </animated.div>
              </div> */}
              <button>Click me</button>
            </Link>
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
          {/* data-aos="fade-right" */}
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
          <Link href="/guides" style={{ textDecoration: "none" }}>
            <div className={styles.read_more}>
              <p>Read more</p>
              <div className={styles.arrow}>
                <ReadMore />
              </div>
            </div>
          </Link>

          <div className={styles.residents} data-aos="fade-left">
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

        <div
          style={{ paddingTop: "100px" }}
          className={styles.kyrgyzstan}
          data-aos="fade-right"
        >
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
          <Link href="/tours" style={{ textDecoration: "none" }}>
            <div className={styles.read_more}>
              <p>Read more</p>
              <div className={styles.arrow}>
                <ReadMore />
              </div>
            </div>
          </Link>
          {/* data-aos="fade-left" */}
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
