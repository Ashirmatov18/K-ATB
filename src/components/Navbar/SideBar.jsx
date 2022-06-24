import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { SideIcon } from "./NavbarIcons";
import { Link } from "@mui/material";

export default function SideBar() {
  const [modal, setModal] = useState(false);
  const [mainModal, setMainModal] = useState(true);

  return (
    <div>
      {mainModal === true ? (
        <Menu right>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="bottom_line">
              <p className="menu-item" href="/">
                Главная
              </p>
              <SideIcon />
            </div>
          </Link>

          <Link
            href="/about"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="bottom_line">
              <p className="menu-item" href="/salads">
                О нас
              </p>
              <SideIcon />
            </div>
          </Link>

          <Link
            href="/kyrgyzstan"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="bottom_line">
              <p className="menu-item" href="/pizzas">
                Кыргызстан
              </p>
              <SideIcon />
            </div>
          </Link>

          <Link
            href="/tours"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="bottom_line">
              <p className="menu-item" href="/desserts">
                Тур.фирмы
              </p>
              <SideIcon />
            </div>
          </Link>

          <Link
            href="/guides"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="bottom_line">
              <p className="menu-item" href="/desserts">
                Гиды
              </p>
              <SideIcon />
            </div>
          </Link>

          {/* <Link
             href="/ordercar"
             style={{ textDecoration: "none", color: "white" }}
           > */}
          <div
            onClick={() => [setModal(true), setMainModal(false)]}
            className="bottom_line"
          >
            <p className="menu-item" href="/desserts">
              Услуги
            </p>
            <SideIcon />
          </div>
          {/* </Link> */}

          <Link
            href="/hotels"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="bottom_line">
              <p className="menu-item" href="/desserts">
                Отели
              </p>
              <SideIcon />
            </div>
          </Link>

          <Link href="/cafe" style={{ textDecoration: "none", color: "white" }}>
            <div className="bottom_line">
              <p className="menu-item" href="/desserts">
                Кафе-рестораны
              </p>
              <SideIcon />
            </div>
          </Link>

          <Link
            href="/entert"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div className="bottom_line">
              <p className="menu-item" href="/desserts">
                Развлечения
              </p>
              <SideIcon />
            </div>
          </Link>

          <Link
            href="/partners"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="bottom_line">
              <p className="menu-item" href="/desserts">
                Партнеры
              </p>
              <SideIcon />
            </div>
          </Link>
          <Link href="/news" style={{ textDecoration: "none", color: "white" }}>
            <div className="bottom_line">
              <p className="menu-item" href="/desserts">
                Новости
              </p>
              <SideIcon />
            </div>
          </Link>
        </Menu>
      ) : (
        <Menu right className="second_menu">
          <div
            className="bottom_line"
            onClick={() => [setModal(false), setMainModal(true)]}
          >
            <p className="menu-item" href="/">
              Назад
            </p>
            <SideIcon />
          </div>

          <Link
            href="/ordercar"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="bottom_line">
              <p className="menu-item" href="/salads">
                Аренда Машин
              </p>
              <SideIcon />
            </div>
          </Link>

          <Link href="/service">
            <div className="bottom_line">
              <p className="menu-item" href="/salads">
                Другие
              </p>
              <SideIcon />
            </div>
          </Link>
        </Menu>
      )}
    </div>
  );
}
