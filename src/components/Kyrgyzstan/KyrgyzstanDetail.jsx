import React, { useState, useEffect } from "react";
import styles from "../../../styles/Kyrgyzstan.module.css";
import axios from "axios";

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
        <div className={styles.bishkeek}></div>
        <div className={styles.ala_a}></div>
        <div className={styles.o}></div>
        <div className={styles.is}></div>
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
