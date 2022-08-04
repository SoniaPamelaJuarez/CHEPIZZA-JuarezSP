import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
    return (
        <Link to={`/category/${props.categoryId}`} className='button' href='#' >{props.label}</Link>
    )
}

export default Button;