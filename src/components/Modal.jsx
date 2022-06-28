import React, { useRef, useEffect } from "react";
import styles from "../../styles/cars.module.css";
import { Left, Right } from "./Main/MainIcons";
import { Exit } from "./Navbar/NavbarIcons";

export default function Modal(props) {
  console.log(props);

  return (
    <div>
      <div className={styles.modal}>
        <div className={styles.main}>
          <div className={styles.controllers}>
            <div>
              <Left className={styles.next_prev} />
              <Right />
            </div>
            <div>
              {" "}
              <Exit onClick={props.hide} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className={styles.info_bt}>
            <div
              style={{ fontSize: "55px" }}
              className={styles.title_bt}
              ref={props.domNode}
            >
              <h1>
                {props.title.title} {props.last_name.last_name}
              </h1>
            </div>
            <div className={styles.img_by}>
              <img src={props.image.image} alt="" />
            </div>
            <div className={styles.desc_trans}>
              <p>ИНФОРМАЦИЯ : </p>
              <span>{props.translations.translations.ru.description}</span>
            </div>
            <div className={styles.contact_info}>
              <div>КОНТАКТЫ : </div>
              <div>{props.email.email}</div>
              <div>{props.phone_number.phone_number}</div>
            </div>
          </div>

          {/* <img src={wordData.value} className={styles.main_carousel} /> */}
          <div className={styles.flex_row}>
            {/* {imgs.map((data, i) => (
                <div className={styles.thumbnail} key={i}>
                  <img
                    className={styles.mini_carousel}
                    src={data.value}
                    onClick={() => handleClick(i)}
                    height="70"
                    width="100"
                  />
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
