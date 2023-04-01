import style from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
import { FC } from "react";

 type TClosePopup = {
  closePopup: () => void;
}

const ModalOverlay: FC<TClosePopup> =({ closePopup })=> {
  return <div className={style.overlay} onClick={() => closePopup()}></div>;
}

ModalOverlay.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default ModalOverlay;
