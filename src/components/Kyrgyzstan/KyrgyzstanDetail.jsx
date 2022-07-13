import React, { useState, useEffect } from "react";
import styles from "../../../styles/Kyrgyzstan.module.css";
import axios from "axios";
import { Link } from "@material-ui/core";

export default function KyrgyzstanDetail() {
  const [state, setState] = useState([]);

  const getAllDeTail = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/kyrgyzstan/`
    );
    console.log(data.floor_two);
    return data.floor_two;
  };

  getAllDeTail();
  useEffect(() => {
    getAllDeTail().then((data) => setState([data]));
  }, []);

  return (
    <div>
      <div className={styles.details}>
        <Link href="/bishkek">
          <div className={styles.bishkeek}>
            {" "}
            <h1 className={styles.title}>Bishkek</h1>
          </div>
        </Link>
        <Link href="/ala-archa">
          <div className={styles.ala_a}>
            {" "}
            <h1 className={styles.title}>Ala-Archa</h1>
          </div>
        </Link>
        <Link href="/osh">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Osh</h1>
          </div>
        </Link>
        <Link href="/issyk-kul">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>Issyk-Kul</h1>
          </div>
        </Link>

        <Link href="/kashkasuu">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Кашка-Суу </h1>
          </div>
        </Link>

        <Link href="/twelve">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>12 каменов</h1>
          </div>
        </Link>

        <Link href="/chunk">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Чункурчак</h1>
          </div>
        </Link>

        <Link href="/hawaii">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>Гавайи</h1>
          </div>
        </Link>
        <Link href="/orlovka">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Орловка</h1>
          </div>
        </Link>

        <Link href="/kegeti">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>Кегети</h1>
          </div>
        </Link>

        <Link href="/kemin">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Чон Кемин</h1>
          </div>
        </Link>

        <Link href="/grigor">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>Григорьевка</h1>
          </div>
        </Link>

        <Link href="/kyrchyn">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Кырчын</h1>
          </div>
        </Link>

        <Link href="/karakol">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>Каракол</h1>
          </div>
        </Link>

        <Link href="/zheti">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Жети-Огуз</h1>
          </div>
        </Link>

        <Link href="/kok">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>Кок-Жайык</h1>
          </div>
        </Link>

        <Link href="/barskoon">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Барскоон</h1>
          </div>
        </Link>
        <Link href="/susamyr">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>Суусамыр</h1>
          </div>
        </Link>

        <Link href="/chychkan">
          <div className={styles.o}>
            {" "}
            <h1 className={styles.title}>Чычкан</h1>
          </div>
        </Link>

        <Link href="/sary">
          <div className={styles.is}>
            {" "}
            <h1 className={styles.title}>Сары-Челек</h1>
          </div>
        </Link>
        {!!state?.length &&
          state.map(({ images, translations }) => (
            <>
              <div
                className={styles.is}
                style={{
                  backgroundImage: `url(${images[0].image})`,
                }}
              ></div>
            </>
          ))}
      </div>
    </div>
  );
}
