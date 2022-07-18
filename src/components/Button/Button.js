import './Button.css';

const Button = (props) => {
    return (
        <button className='button' href='#' >{props.label}</button>
    )
}

export default Button;