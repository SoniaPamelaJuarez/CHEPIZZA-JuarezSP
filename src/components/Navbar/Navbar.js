import './Navbar.css';
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='logo'>
            <img className='logo_img' src='/images/logo.png' alt='logo'/>
            </div>
            <div>
                <Link className='home_button' to='/'> Home </Link>
                <Button categoryId='pizza' label='Pizzas'/>
                <Button categoryId='hamburguesa' label='Hamburguesas'/>
                <Button categoryId='ensalada' label='Ensaladas'/>
            </div>
            <CartWidget />
        </nav>
    );
}

export default Navbar;