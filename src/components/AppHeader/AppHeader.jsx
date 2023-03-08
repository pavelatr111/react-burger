import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./AppHeader.module.css";
import React from "react";
import HeaderLink from "./Link";
import { Link, useMatch } from "react-router-dom";

function AppHeader() {
  const linkStyle =
    "text text_type_main-default text_color_primary mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ";
  const unActiveStyle =
    "text text_type_main-default text_color_inactive mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ";

  const matchHome = useMatch("/");
  const matchList = useMatch("/feed");
  const matchProfile = useMatch("/profile");

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <div className={headerStyle.links}>
          <HeaderLink
            lclass={({ isActive }) =>
              isActive
                ? `${linkStyle}${headerStyle.link}`
                : `${unActiveStyle}${headerStyle.link}`
            }
            paragraphClass={"ml-2"}
            icon={
              <BurgerIcon type={Boolean(matchHome) ? "primary" : "secondary"} />
            }
            text={"Конструктор"}
            href={"/"}
          />
          <HeaderLink
            lclass={({ isActive }) =>
              isActive
                ? `${linkStyle}${headerStyle.link}`
                : `${unActiveStyle}${headerStyle.link}`
            }
            paragraphClass={"ml-2"}
            icon={
              <ListIcon type={Boolean(matchList) ? "primary" : "secondary"} />
            }
            text={"Лента заказов"}
            href={"/feed"}
          />
          <link />
        </div>
        <div className={headerStyle.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <HeaderLink
          lclass={({ isActive }) =>
            isActive
              ? `${linkStyle}${headerStyle.link}`
              : `${unActiveStyle}${headerStyle.link}`
          }
          paragraphClass={"ml-2"}
          icon={
            <ProfileIcon
              type={Boolean(matchProfile) ? "primary" : "secondary"}
            />
          }
          text={"Личный кабинет"}
          href={"/profile"}
        />
      </nav>
    </header>
  );
}

export default AppHeader;
