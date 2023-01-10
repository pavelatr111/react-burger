import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./AppHeader.module.css";
import React from "react";
import Link from "./Link";

function AppHeader() {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <div className={headerStyle.links}>
          <Link
            lclass={`${headerStyle.link} text text_type_main-default text_color_inactive mt-4 mb-4 pt-4 pb-4 pr-5 pl-5`}
            paragraphClass={"ml-2 text_color_primary"}
            icon={<BurgerIcon type="primary" />}
            text={"Конструктор"}
            href={"#"}
          />
          <Link
            lclass={`${headerStyle.link} text text_type_main-default text_color_inactive mt-4 mb-4 pt-4 pb-4 pr-5 pl-5`}
            paragraphClass={"text text_type_main-default text_color_inactive"}
            icon={<ListIcon type="secondary" />}
            text={"Лента заказов"}
            href={"#"}
          />
          <link />
        </div>
        <div className={headerStyle.logo}>{<Logo />}</div>
        <Link
          lclass={`${headerStyle.link} text text_type_main-default text_color_inactive mt-4 mb-4 pt-4 pb-4 pr-5 pl-5`}
          paragraphClass={"text text_type_main-default text_color_inactive"}
          icon={<ProfileIcon type="secondary" />}
          text={"Личный кабинет"}
          href={"#"}
        />
      </nav>
    </header>
  );
}

export default AppHeader;
