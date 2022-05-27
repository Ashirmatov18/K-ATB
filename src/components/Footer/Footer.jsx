import React from "react";
import styles from "../../../styles/Footer.module.css";
import MainLayout from "../ui/MainLayout";
import { LogoFooter } from "./FooterSvg";

export default function Footer() {
  return (
    <div>
      <div style={{ backgroundColor: "#000", color: "#fff" }}>
        <MainLayout>
          <div className={styles.horse_section}>
            <h1>
              Subscribe To Get The Latest News <br /> About Us
            </h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                proin tristique <br /> proin feugiat est ornare{" "}
              </p>
            </div>
            <form className={styles.form} action="">
              <input
                className={styles.confirm_inp}
                type="text"
                name=""
                id=""
                placeholder="E-mail"
              />
              <button className={styles.confirm_but}>Send</button>
            </form>
          </div>
        </MainLayout>
      </div>
      <footer className={styles.footer_info}>
        <MainLayout>
          <div className={styles.footer_main}>
            <ul>
              <li>Главная</li>
              <li>О нас</li>
              <li>Кыргызстан</li>
              <div>
                <li>Гиды и тур.фирмы</li>
                <li className={styles.post_li}>Гиды</li>
                <li style={{ color: "#BDBDBD" }}>Турфирмы</li>
              </div>
              <div>
                <li>Услуги</li>
                <li className={styles.post_li}>Аренда машин</li>
                <li style={{ color: "#BDBDBD" }}>Другие</li>
              </div>
              <li>Кафе-рестораны</li>
              <li>Развлечения</li>
              <li>Партнеры</li>
              <li>Новости</li>
            </ul>
          </div>

          <div className={styles.footer_last}>
            <div>
              <LogoFooter />
            </div>
            <div>
              <p>© K-BAT- 2022</p>
            </div>
            <div style={{ fontSize: "20px" }}>
              <p>+996 123 456</p>
            </div>
          </div>
        </MainLayout>
      </footer>
    </div>
  );
}
