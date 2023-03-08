import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function HeaderLink({ lclass, href, icon, paragraphClass, text }) {
  return (
    // <a className={lclass} href={href}>
    //   {icon} <p className={paragraphClass}>{text}</p>
    // </a>
    <NavLink className={lclass} to={href}>
      {icon} <span className={paragraphClass}>{text}</span>
    </NavLink>
  );
}

HeaderLink.propTypes = {
  href: PropTypes.string.isRequired,
  lclass: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  paragraphClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeaderLink;
