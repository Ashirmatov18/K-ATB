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
              Центральной Азии, в самом «сердце» континента Евразии. Около 90%
              площади Кыргызстана находится на высоте более 1500 метров над
              уровнем моря.
            </span>
            <span style={{ color: "#2F2F2F", fontSize: "24px" }}>
              <br /> <br /> <br /> 22 разнообразных экосистем; 160
              разновидностей горных и равнинных ландшафтов. 94% территории
              занята горами, среди известных горных вершин, такие как пик Победы
              (7439 м), пик Ленина (7134 м), пик Хан-Тенгри (6995 м). <br />
              {"  "} <br />
              Один из самых протяженных ледников «Эныльчек» также является
              достопримечательностью мирового масштаба; 1923 красивейших озер,
              главным из которых является озеро Иссык-Куль – одно из самых
              больших и самых глубоких высокогорных озер мира; более 40 тысяч
              рек и речушек, главным источником воды в которых является талая
              вода с горных ледников.
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
            грязелечение, джайлоо-туризм, кумысолечение и т.д.); <br />
            активно-приключенческий (горно-пеший туризм, конный туризм,
            велотуризм, экотуризм, фотоохота, альпинизм, рафтинг, автотуризм,
            айыл туризм, дайвинг, дельтапланеризм и т.д.); <br />
            культурно-познавательный (знакомство с культурой, обычаями,
            наследием и традициями кыргызов, туризм по Великому Шелковому пути,
            гастрономический туризм и т.д.); <br /> зимний туризм (горнолыжный
            туризм, фрирайдинг, сноубординг, зимние туры и т.д.); деловой
            туризм (международные саммиты, форумы, симпозиумы, конференции и
            т.д.); событийный туризм (международные традиционные этно-игры,
            национальные праздники, творческие фестивали, конкурсы, выставки,
            спортивные события т.д.).
          </span>

          <Link href="/kyrgyzstandetail">
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
          </Link>
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
