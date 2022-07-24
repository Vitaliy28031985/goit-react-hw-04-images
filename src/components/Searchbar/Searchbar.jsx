
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from "react-icons/im";
import s from './Searchbar.module.css';

export class Searchbar extends Component {

   state = {
   imgValue: '',
   }

   static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };

   handleChange = e => {
   this.setState({imgValue: e.currentTarget.value.toLowerCase()});
   }
   
  
   handleSubmit = e => {
   e.preventDefault();
   const {imgValue} = this.state;

  if(imgValue.trim() === '') {
   toast("Enter text");
    return;
  }

   this.props.onSubmit(imgValue);
   this.setState({ imgValue: '' });
   }


   render() {
    const {handleSubmit, handleChange} = this;
   return (
    <>
<header className={s.Searchbar}>
<form onSubmit={handleSubmit} className={s.SearchForm}>
  <button type='submit' className={s.SearchFormButton}>
     <ImSearch 
        style={{marginRight: 8}} />
         <span className={s.buttonLabel}>Search</span>
            </button>
    
                <input
                className={s.input}
                type='text'
                autoComplete='off'
                autoFocus placeholder='Search images and photos'
                onChange={handleChange}/>
</form>
      <ToastContainer 
      position='top-center'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
</header>
</>
   )
  }
 };