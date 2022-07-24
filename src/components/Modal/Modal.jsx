import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';


export const Modal = ({onModal, poster, images}) => { 
 
useEffect(() => {
window.addEventListener('keydown', handleKeyDown);
return () => {
window.removeEventListener('keydown', handleKeyDown);
} 
});
   
const handleKeyDown = e => {
  if (e.code === 'Escape') {
   onModal();
   }
   };
  
const handleBackdropClick = e => {
  if (e.currentTarget === e.target) {
   onModal();
   }
   };
 
      return (
        <div className={s.Overlay} onClick={handleBackdropClick}>
          <div className={s.Modal}>
          <img
          onClick={onModal}
          src={poster} alt={images.tags} />
          </div>
        </div>
      )   
}


Modal.propTypes = {
  onModal: PropTypes.func.isRequired,
  poster: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,  
}
