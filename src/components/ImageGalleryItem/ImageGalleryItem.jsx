
import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';


export const  ImageGalleryItem = (
 { webformatURL,
  largeImageURL, 
  tags,
  handleModal}
  ) => {
 
   return (
<li className={s.ImageGalleryItem}>
  <img
  className={s.ImageGalleryItemIimage}
  onClick={() => handleModal(largeImageURL)}
  src={webformatURL}
  alt={tags}/> 
</li>
   );
  };
  ImageGalleryItem.propTypes = {

    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    handleModal: PropTypes.func.isRequired,
    
  }
