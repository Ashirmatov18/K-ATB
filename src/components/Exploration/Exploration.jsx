import React, { useState } from "react";
import MainLayout from "../ui/MainLayout";
import styles from "../../../styles/Exploration.module.css";
import { ReadMore } from "../Main/MainIcons";
import ExpoSlider from "./ExpoSlider";
import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axios from "axios";

export default function Exploration() {
  const [state, setState] = useState([]);
  const [about, setAbout] = useState([]);
  const [travel, setTravel] = useState([]);
  const [guides, setGuides] = useState([]);
  const [logo, setLogo] = useState([]);

  const getInfo = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/`);
    return data.guides;
  };

  const getGuides = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/`);
    return data.our_guides;
  };

  const getAbout = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/`);
    console.log(data);

    return data.kyrgyzstan;
  };

  const getTravel = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/`);

    return data.our_companies;
  };

  const getLogo = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/`);

    return data.travelCompanies;
  };

  getInfo();
  getAbout();
  getTravel();
  getGuides();
  getLogo();

  useEffect(() => {
    // getInfo().then((data) => setState([data]));
    getInfo().then(setState);
    getAbout().then(setAbout);
    getTravel().then(setTravel);
    getGuides().then(setGuides);
    getLogo().then(setLogo);
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.exploration_main} style={{ marginTop: "120px" }}>
      <div className={styles.back_styles}>
        <MainLayout>
          <div className={styles.kyrgyzstan}>
            <div>
              <h1>KYRGYZSTAN</h1>
              <div>
                {!!about?.length &&
                  about.map(({ description, title }) => (
                    <>
                      <span>{title}</span> <p>{description}</p>
                    </>
                  ))}
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
              <button>Подробнее</button>
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
            <div>
              {!!guides?.length &&
                guides.map(({ description, title }) => (
                  <>
                    <span>{title}</span> <p>{description}</p>
                  </>
                ))}
            </div>
          </div>
          <Link href="/guides" style={{ textDecoration: "none" }}>
            <div className={styles.read_more}>
              <p className={styles.p_read}>Все гиды</p>
              <div className={styles.arrow}>
                <ReadMore />
              </div>
            </div>
          </Link>
          <div classname={styles.wrappper}>
            <div className={styles.residents} data-aos="fade-up">
              {!!state?.length &&
                state.map(({ title, image }) => (
                  <div style={{ marginRight: "15px" }}>
                    <div
                      style={{ backgroundImage: `url(${image})` }}
                      className={styles.first_res}
                    ></div>
                    <div className={styles.res_name}>
                      <p>{title}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div
          style={{ paddingTop: "0px" }}
          className={styles.kyrgyzstan}
          data-aos="fade-down"
        >
          <div>
            <h1>ТУРФИРМЫ</h1>
            <div>
              {!!travel?.length &&
                travel.map(({ description, title }) => (
                  <>
                    <span>{title}</span> <p>{description}</p>
                  </>
                ))}
            </div>
          </div>
          <Link href="/tours" style={{ textDecoration: "none" }}>
            <div className={styles.read_more}>
              <p className={styles.p_read}>Все тур.фирмы</p>
              <div className={styles.arrow}>
                <ReadMore />
              </div>
            </div>
          </Link>
          {/* data-aos="fade-left" */}
          <div className={styles.wrapper}>
            {!!logo?.length &&
              logo.map(({ title, image }) => (
                <div style={{ marginRight: "15px" }}>
                  <div
                    style={{ backgroundImage: `url(${image})` }}
                    className={styles.first_res}
                  ></div>
                  <div className={styles.res_name}>
                    <p>{title}</p>
                  </div>
                </div>
              ))}
            {/* <div className={styles.logo_main}>
              <div className={styles.first_logo}>
                {" "}
                <p className={styles.logo}>LOGO</p>
              </div>
              <div className={styles.res_name}>
                <p>Travel Company</p>
              </div>
            </div> */}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
