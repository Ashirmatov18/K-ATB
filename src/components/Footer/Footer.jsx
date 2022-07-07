import React, { useEffect, useState } from "react";
import styles from "../../../styles/Footer.module.css";
import MainLayout from "../ui/MainLayout";
import { LogoFooter } from "./FooterSvg";
import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { Facebook, Insta, Whats } from "../OrderCars/OrderCarsSvg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ScrollUpButton from "react-scroll-up-button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ScrollUpButton />
      <div className={styles.footer_img} style={{ color: "#fff" }}>
        <MainLayout>
          <div className={styles.horse_section} data-aos="fade-down">
            <h1>Подпишись, чтобы узнать новости</h1>
            <div>
              <p>
                В отличие от обычной купли-продажи, подписка предлагает
                периодическую <br /> (ежедневную, еженедельную, двухнедельную,
                ежемесячную, полугодовую, <br /> годовую/годовую или сезонную)
                оплату
              </p>
            </div>
            <div className={styles.form}>
              <input
                className={styles.confirm_inp}
                type="text"
                name=""
                id=""
                placeholder="E-mail"
              />
              <button onClick={handleOpen} className={styles.confirm_but}>
                Отправить
              </button>
            </div>
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
                  <li>Гиды</li>
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
                  <li
                    className={styles.post_li}
                    style={{ color: "#BDBDBD", paddingTop: "10px" }}
                  >
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
                <Link
                  href="/service"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li
                    className={styles.post_li}
                    style={{ color: "#BDBDBD", paddingTop: "10px" }}
                  >
                    Другие
                  </li>
                </Link>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "15vw",
              }}
            >
              <Link
                target="_blank"
                href="https://www.facebook.com/Tabiyatkg-105609372166838/"
              >
                <div className={styles.f}>
                  <Facebook />
                </div>
              </Link>

              <Link
                target="_blank"
                href="https://www.facebook.com/Tabiyatkg-105609372166838/"
              >
                <div className={styles.i}>
                  <Insta />
                </div>
              </Link>

              <Link target="_blank" href="https://vt.tiktok.com/ZSd3GcwJt/">
                <div className={styles.w}>
                  <Whats />
                </div>
              </Link>
            </div>
          </div>
        </MainLayout>

        {/* {modal === true ? (
          <div className={styles.modal_sended}>
            <h1>hello</h1>
          </div>
        ) : (
          <></>
        )} */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              УСПЕШНО ОТПРАЛЕНО!
            </Typography>
          </Box>
        </Modal>
      </footer>
    </div>
  );
}
