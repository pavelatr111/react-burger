import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./Modal.module.css";
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import ReactDOM from "react-dom";
import { FC, ReactElement, useEffect } from "react";


type IModalProps = {
  title?: string;
  children?: ReactElement;
  closePopup: () => void;
}

const Modal: FC<IModalProps> = ({ children, title, closePopup}) =>{

  useEffect(() => {
    const handleEscClose = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        closePopup()
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
        <span className={style.closeIcon} onClick={closePopup}>
          <CloseIcon type="primary" />
        </span>
        {children}
      </div>
      <ModalOverlay closePopup={closePopup}/>
    </>,
    document.getElementById('modal-root')!
  );
}

export default Modal;
