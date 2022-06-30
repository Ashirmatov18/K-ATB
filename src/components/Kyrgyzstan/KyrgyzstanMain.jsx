import React, { useEffect, useState } from "react";
import MainLayout from "../ui/MainLayout";
import VideoKg from "./VideoKg";
import styles from "../../../styles/Kyrgyzstan.module.css";
import Gallery from "./Gallery";
import News from "../News/News";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function KyrgyzstanMain() {
  const [modal, setModal] = useState(false);

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
              Кыргызская Республика
            </h1>
            <span
              data-aos="fade-down"
              style={{ color: "#2F2F2F", fontSize: "32px", fontWeight: "500" }}
            >
              Кыргызская Республика расположена в северо-восточной части
              Центральной Азии, в самом «сердце» континента Евразии.
            </span>
            <span style={{ color: "#2F2F2F", fontSize: "24px" }}>
              <br /> <br /> <br /> 22 разнообразных экосистем; 160
              разновидностей горных и равнинных ландшафтов. 94% территории
              занята горами, среди известных горных вершин, такие как пик Победы
              (7439 м), пик Ленина (7134 м), пик Хан-Тенгри (6995 м). <br />
              {"  "} <br />
              Один из самых протяженных ледников также является
              достопримечательностью мирового масштаба; 1923 красивейших озер,
              главным из которых является озеро Иссык-Куль – одно из самых
              больших и самых глубоких высокогорных озер мира.
            </span>
          </div>
          <div className={styles.about_sea} data-aos="fade-up"></div>
        </div>

        <div className={styles.info_img} data-aos="fade-down">
          <h1 style={{ color: "#333333", fontWeight: "500", fontSize: "50px" }}>
            Виды туризма
          </h1>
          <span
            style={{ color: "#2F2F2F", fontSize: "24px" }}
            data-aos="fade-down"
          >
            Лечебно-оздоровительный (курортно-рекреационный, траволечение,
            грязелечение, джайлоо-туризм); <br />
            Активно-приключенческий (горно-пеший туризм, конный туризм,
            велотуризм, экотуризм, фотоохота); <br />
            Культурно-познавательный (знакомство с культурой, обычаями,
            традициями кыргызов, туризм по Великому Шелковому пути); <br />{" "}
            Кимний туризм (горнолыжный туризм, фрирайдинг, сноубординг, зимние
            туры и т.д.)
          </span>

          <Link href="/kyrgyzstandetail">
            <div className={styles.link_detail}>
              <h1>ВСЕ НАПРАВЛЕНИЯ</h1>
            </div>
          </Link>

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

      {/* {modal === true ? (
        <div className={styles.modal_window}></div>
      )} */}
    </div>
  );
}
