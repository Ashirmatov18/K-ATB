import React, { useEffect } from "react";
import styles from "../../../styles/Footer.module.css";
import MainLayout from "../ui/MainLayout";
import { LogoFooter } from "./FooterSvg";
import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className={styles.footer_img} style={{ color: "#fff" }}>
        <MainLayout>
          <div className={styles.horse_section} data-aos="fade-down">
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
          <div className={styles.footer_main} data-aos="fade-up">
            <ul>
              <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                <li>Главная</li>
              </Link>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>О нас</li>
              </Link>
              <Link
                href="/kyrgyzstan"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Кыргызстан</li>
              </Link>
              <div>
                <Link
                  href="/guides"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Гиды и тур.фирмы</li>
                </Link>
                <Link
                  href="/guides"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li className={styles.post_li}>Гиды</li>
                </Link>

                <Link
                  href="/tours"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li style={{ color: "#BDBDBD", paddingTop: "10px" }}>
                    Турфирмы
                  </li>
                </Link>
              </div>
              <div>
                <li>Услуги</li>
                <Link
                  href="/ordercar"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li className={styles.post_li}>Аренда машин</li>
                </Link>
                <li style={{ color: "#BDBDBD", paddingTop: "10px" }}>Другие</li>
              </div>
              <Link
                href="/cafe"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Кафе-рестораны</li>
              </Link>
              <Link
                href="/entert"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Развлечения</li>
              </Link>
              <Link
                href="/partners"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Партнеры</li>
              </Link>
              <Link
                href="/news"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Новости</li>
              </Link>
            </ul>
          </div>
          <div className={styles.footer_last}>
            <div>
              <LogoFooter />
            </div>
            <div>
              <p>© K-BAT- 2022</p>
            </div>
            <div className={styles.phone_footer} style={{ fontSize: "20px" }}>
              <p>+996 123 456</p>
            </div>
          </div>

          {/* <div className={styles.footer_adaptive}>
            <Link style={{ textDecoration: "none", color: "white" }} href="/">
              <div className="bottom_line">
                <p className="menu-item" href="/">
                  Главная
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/about"
            >
              <div className="bottom_line">
                <p className="menu-item" href="/salads">
                  О нас
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/kyrgyzstan"
            >
              <div className="bottom_line">
                <p className="menu-item" href="/pizzas">
                  Кыргызстан
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/tours"
            >
              <div className="bottom_line">
                <p className="menu-item" href="/desserts">
                  Гиды и тур.фирмы
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/guides"
            >
              <div className="bottom_line">
                <p className="menu-item" href="/desserts">
                  Услуги
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/hotels"
            >
              <div className="bottom_line">
                <p className="menu-item" href="/desserts">
                  Отели
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/cafe"
            >
              <div className="bottom_line">
                <p className="menu-item" href="/desserts">
                  Кафе-рестораны
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/enter"
            >
              {" "}
              <div className="bottom_line">
                <p className="menu-item" href="/desserts">
                  Развлечения
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/partners"
            >
              <div className="bottom_line">
                <p className="menu-item" href="/desserts">
                  Партнеры
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/news"
            >
              <div className="bottom_line">
                <p className="menu-item" href="/desserts">
                  Новости
                </p>
              </div>
            </Link>
          </div> */}
        </MainLayout>
      </footer>
    </div>
  );
}
