import React from "react";
import { slide as Menu } from "react-burger-menu";
import { SideIcon } from "./NavbarIcons";

export default function SideBar() {
  return (
    <div>
      <Menu right>
        <div className="bottom_line">
          <p className="menu-item" href="/">
            Главная
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/salads">
            О нас
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/pizzas">
            Кыргызстан
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/desserts">
            Гиды и тур.фирмы
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/desserts">
            Услуги
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/desserts">
            Отели
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/desserts">
            Кафе-рестораны
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/desserts">
            Развлечения
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/desserts">
            Партнеры
          </p>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <p className="menu-item" href="/desserts">
            Новости
          </p>
          <SideIcon />
        </div>
      </Menu>
    </div>
  );
}
