import React from "react";
import { slide as Menu } from "react-burger-menu";
import { SideIcon } from "./NavbarIcons";
import { Link } from "@mui/material";

export default function SideBar() {
  return (
    <div>
      <Menu right>
        <Link href="/">
          <div className="bottom_line">
            <p className="menu-item" href="/">
              Главная
            </p>
            <SideIcon />
          </div>
        </Link>

        <Link href="/about">
          <div className="bottom_line">
            <p className="menu-item" href="/salads">
              О нас
            </p>
            <SideIcon />
          </div>
        </Link>

        <Link href="/kyrgyzstan">
          <div className="bottom_line">
            <p className="menu-item" href="/pizzas">
              Кыргызстан
            </p>
            <SideIcon />
          </div>
        </Link>

        <Link href="/tours">
          <div className="bottom_line">
            <p className="menu-item" href="/desserts">
              Гиды и тур.фирмы
            </p>
            <SideIcon />
          </div>
        </Link>

        <Link href="/guides">
          <div className="bottom_line">
            <p className="menu-item" href="/desserts">
              Услуги
            </p>
            <SideIcon />
          </div>
        </Link>

        <Link href="/hotels">
          <div className="bottom_line">
            <p className="menu-item" href="/desserts">
              Отели
            </p>
            <SideIcon />
          </div>
        </Link>

        <Link href="/cafe">
          <div className="bottom_line">
            <p className="menu-item" href="/desserts">
              Кафе-рестораны
            </p>
            <SideIcon />
          </div>
        </Link>

        <Link href="/enter">
          {" "}
          <div className="bottom_line">
            <p className="menu-item" href="/desserts">
              Развлечения
            </p>
            <SideIcon />
          </div>
        </Link>

        <Link href="/partners">
          <div className="bottom_line">
            <p className="menu-item" href="/desserts">
              Партнеры
            </p>
            <SideIcon />
          </div>
        </Link>
        <Link href="/news">
          <div className="bottom_line">
            <p className="menu-item" href="/desserts">
              Новости
            </p>
            <SideIcon />
          </div>
        </Link>
      </Menu>
    </div>
  );
}
