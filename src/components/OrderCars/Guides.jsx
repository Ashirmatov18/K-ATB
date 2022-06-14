import {
  Email,
  Facebook,
  Insta,
  LineHeight,
  Mobile,
  Search,
  Whats,
} from "./OrderCarsSvg";
import React from "react";
import styles from "../../../styles/ordercars.module.css";
import MainLayout from "../ui/MainLayout";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Paginanation from "../Paginanation";
import { useRouter } from "next/router";

export default function Guides() {
  const [modal, setModal] = useState(false);

  // const imgs = [
  //   { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
  //   { id: 1, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
  //   { id: 2, value: "https://source.unsplash.com/user/c_v_r/100x100" },
  // ];

  // const [wordData, setWordData] = useState(imgs[0]);
  // const [slideIndex, setSlideIndex] = useState(1);

  // const handleClick = (index) => {
  //   const wordSlider = imgs[index];
  //   setWordData(wordSlider);
  // };

  // const next = (index) => {
  //   const currentImageIndex = imgs[0];
  //   if (currentImageIndex !== imgs.length) {
  //     setWordData(currentImageIndex + 1);
  //   } else if (wordData === imgs.length) {
  //     setWordData(0);
  //   }
  // };
  const router = useRouter();
  const { id } = router.query;

  const getInfo = async () => {
    const { data } = await axios.get(`http://35.88.109.74/api/v1/guides/`);
    console.log(data.results);
    return data.results;
  };

  getInfo();
  const [state, setState] = useState([]);

  useEffect(() => {
    getInfo().then(setState);
    setModal(!modal);
  }, []);

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div className={styles.about_title}>
          <span>ГИДЫ</span>
        </div>
      </div>

      <MainLayout>
        <div className={styles.kyrgyzstan}>
          <div>
            <div className={styles.search_explore}>
              <span>Explore our world with us</span>
              <div className={styles.main_search}>
                <input
                  type="text"
                  className={styles.search}
                  placeholder="Поиск"
                />
                <Search className={styles.search_icon} />
              </div>
            </div>
            <div>
              <p style={{ paddingTop: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                ligula rhoncus, ut erat dictumst. Vitae non et <br />{" "}
                scelerisque libero. Odio auctor ut tortor bibendum. Sapien nisl,
                turpis quam convallis morbi vel. Elit faucibus sit <br /> cras
                iaculis
              </p>
            </div>
          </div>
        </div>
        <div onClick={() => setModal(true)} className={styles.person_cards}>
          <Paginanation data={state} />
        </div>
      </MainLayout>
    </div>
  );
}
