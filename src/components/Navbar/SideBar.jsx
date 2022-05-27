import React from "react";
import { slide as Menu } from "react-burger-menu";
import { SideIcon } from "./NavbarIcons";

export default function SideBar() {
  return (
    <div>
      <Menu right>
        <div className="bottom_line">
          <a className="menu-item" href="/">
            Главная
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/salads">
            О нас
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/pizzas">
            Кыргызстан
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/desserts">
            Гиды и тур.фирмы
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/desserts">
            Услуги
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/desserts">
            Отели
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/desserts">
            Кафе-рестораны
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/desserts">
            Развлечения
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/desserts">
            Партнеры
          </a>
          <SideIcon />
        </div>
        <div className="bottom_line">
          <a className="menu-item" href="/desserts">
            Новости
          </a>
          <SideIcon />
        </div>
      </Menu>
    </div>
  );
}
