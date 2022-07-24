import { useState, useEffect } from 'react';
import {mapperImmage} from 'components/utils/mapper'
import fetchImages from 'components/Api/Api';
import {Searchbar} from 'components/Searchbar/Searchbar';
import {ImageGallery} from 'components/ImageGallery/ImageGallery';
import {MessageError} from 'components/MessageError/MessageError';
import {Button} from 'components/Button/Button';
import {LoaderComponent} from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal'


const Status = {

  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


export const App = () => {
 

const [isLoader, setIsLoader] = useState(false);
const [error, setError] = useState(null);
const [status, setStatus] = useState('idle');
const [imgValue, setImgValue] = useState('');
const [page, setPage] = useState(1);
const [images, setImages] = useState([]);
const [largeImageURL, setLargeImageURL] = useState('');


useEffect(() => {
if(imgValue !== '') {
renderImages(imgValue, page);
}

}, [imgValue, page]);

const renderImages = (imgValue, page) => {
  setIsLoader(true);
  fetchImages(imgValue, page)
  .then(response => 
  setImages(state => [...state, ...mapperImmage(response.hits)])
  )

   .catch(error => {setError(error);
   setStatus(Status.REJECTED);})
   .finally(() => { setStatus(Status.RESOLVED);
    setIsLoader(false);
  });
  }


const handleFormSubmit = newImgValue => {
  if(newImgValue === imgValue) {
    return;
  }
  setImgValue(newImgValue);
  setPage(1);
  setImages([]);
  };


const changePage = () => {
  setPage(prevState => prevState +1);
};

const openModal = (largeImageURL) => {
  setLargeImageURL(largeImageURL);
}

const closeModal = () => {
  setLargeImageURL('');
}

  return (
    <>    
<Searchbar onSubmit={handleFormSubmit}/>
{status === Status.IDLE && (
<p>Please enter your search term</p> )}
{isLoader && <LoaderComponent />}
{status === Status.REJECTED && (
<MessageError message={error.message}/>
)}
{images.length > 0 && (
<>
<ImageGallery images={images}  handleModal={openModal}/>
<Button handleClick={changePage}
 />
</>  )}
{largeImageURL && <Modal poster={largeImageURL} images={images} onModal={closeModal}/>}
</>
  );

};

