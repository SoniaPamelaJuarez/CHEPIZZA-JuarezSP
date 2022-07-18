import './Navbar.css';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='logo'>
            <img className='logo_img' src='./images/logo.png' alt='logo'/>
            </div>
            <div>
                <Button label='Nuestras pizzas'/>
                <Button label='Nosotros'/>
                <Button label='Contacto'/>
            </div>
        </nav>
    );
}

export default Navbar;