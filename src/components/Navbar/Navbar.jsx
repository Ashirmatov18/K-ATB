import React from "react";
import styles from "../../../styles/Navbar.module.css";
import { Burger, Flag, MainLogo } from "./NavbarIcons";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SideBar from "./SideBar";

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
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
}));

export default function Navbar() {
  return (
    <div className={styles.app_main}>
      <div className={styles.navbar_pos}>
        <div className={styles.logo}>
          <MainLogo />
        </div>
        <div className={styles.nav_info}>
          <ul>
            <li>Главная</li>
            <li>О нас</li>
            <li>Кыргызстан</li>
            <li>Гиды и тур.фирмы</li>
            <li>Новости</li>
          </ul>
        </div>
        <div className={styles.nav_add}>
          <div className={styles.search}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
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
  );
}
