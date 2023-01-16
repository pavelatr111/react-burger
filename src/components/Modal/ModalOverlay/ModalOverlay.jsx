import style from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({closePopup}) {
  return(
    <div className={style.overlay} onClick={() => closePopup(false)}></div>
  )
}

ModalOverlay.propTypes = {
  closePopup: PropTypes.func.isRequired
}

export default ModalOverlay;