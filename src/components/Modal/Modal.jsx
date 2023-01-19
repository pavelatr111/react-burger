import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./Modal.module.css";
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';

function Modal({ children, title, closePopup}) {

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closePopup(false)
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose); 
    }
  }, [closePopup])

  return ReactDOM.createPortal(
    <>
      <div className={style.modal}>
        <h3 className="pl-10 pt-10 text text_color_primary text_type_main-large">
          {title}
        </h3>
        <span className={style.closeIcon} onClick={() => closePopup(false)}>
          <CloseIcon type="primary" />
        </span>
        {children}
      </div>
      <ModalOverlay closePopup={closePopup}/>
    </>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  closePopup: PropTypes.func.isRequired
}

export default Modal;
