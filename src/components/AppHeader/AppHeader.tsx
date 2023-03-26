import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./AppHeader.module.css";
// import React from "react";
import HeaderLink from "./Link";
import { Link, useMatch } from "react-router-dom";
import React from "react";

function AppHeader() {
  const matchHome = useMatch("/");
  const matchList = useMatch("/feed");
  const matchProfile = useMatch("/profile");

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <div className={headerStyle.links}>
          <HeaderLink
            paragraphClass={"ml-2"}
            icon={
              <BurgerIcon type={Boolean(matchHome) ? "primary" : "secondary"} />
            }
            text={"Конструктор"}
            href={"/"}
          />
          <HeaderLink
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
