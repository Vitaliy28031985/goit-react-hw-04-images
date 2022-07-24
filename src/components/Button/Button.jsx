
import s from './Button.module.css'
import PropTypes from 'prop-types';


export const Button = ({handleClick}) => {

    const scroll = () => {
      handleClick();
    };

      return (
        <button onClick={scroll} className={s.Button} type="button">
          Load more
        </button>
      );  
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired, 
}