import React, { Suspense, useState } from "react";
import styles from "../../../styles/Navbar.module.css";
import { Burger, Flag, MainLogo } from "./NavbarIcons";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SideBar from "./SideBar";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../i18next";
import Popup from "reactjs-popup";
// import iconWhats from "../../../public/images/premium-icon-whatsapp-2504957.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "70%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "18ch",
      },
    },
  },
}));

export default function Navbar() {
  const [state, setState] = useState(false);
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  // };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.app_main}>
          <div className={styles.navbar_pos}>
            <div className={styles.logo}>
              <Link href="/">
                <MainLogo />
              </Link>
            </div>
            <div className={styles.nav_info}>
              <ul>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <li>
                    {/* {t("navbar.main")} {t("Главная")} */}
                    Главная
                  </li>{" "}
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
                <Link
                  href="/guides"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Гиды</li>
                </Link>
                <Link
                  href="/tours"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <li>Тур.фирмы</li>{" "}
                </Link>
                <Link
                  href="/news"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Новости</li>
                </Link>
              </ul>
            </div>
            <div className={styles.nav_add}>
              <div className={styles.search}>
                <Search className={styles.main_search}>
                  <SearchIconWrapper>
                    <SearchIcon className={styles.search_icon} />
                  </SearchIconWrapper>
                  <StyledInputBase inputProps={{ "aria-label": "search" }} />
                </Search>
              </div>
              {/* onClick={() => changeLanguage("ru")} */}
              <div className={styles.flag}>
                <Flag />
              </div>
              <div className={styles.burger_menu}>
                {/* <Burger /> */}
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      <Popup
        trigger={(open) => <div className="button" open={open}></div>}
        // trigger={
        //   <button className="button">
        //     <iconWhats />
        //   </button>
        // }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Связаться с Нами!</div>
            <div className="content">
              <input className="input_whats" placeholder="Ваше Имя" />
              <input className="input_whats" placeholder="Ваш Номер" />
              <button className="but_whats">Отправить</button>
            </div>
          </div>
        )}
      </Popup>
      {/* <div className={styles.main_whats}>
        <h1>hello</h1>
      </div> */}
    </>
  );
}
