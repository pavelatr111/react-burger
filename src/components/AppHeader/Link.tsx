
import React from "react";
import { NavLink } from "react-router-dom";
import headerStyle from "./AppHeader.module.css";

function HeaderLink({ href, icon, paragraphClass, text }) {
  const linkStyle =
    "text text_type_main-default text_color_primary mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ";
  const unActiveStyle =
    "text text_type_main-default text_color_inactive mt-4 mb-4 pt-4 pb-4 pr-5 pl-5 ";

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${linkStyle}${headerStyle.link}`
          : `${unActiveStyle}${headerStyle.link}`
      }
      to={href}
    >
      {icon} <span className={paragraphClass}>{text}</span>
    </NavLink>
  );
}

// HeaderLink.propTypes = {
//   href: PropTypes.string.isRequired,
//   icon: PropTypes.node.isRequired,
//   paragraphClass: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default HeaderLink;
