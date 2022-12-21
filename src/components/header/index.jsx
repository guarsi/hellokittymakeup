import React, { useContext} from "react";
import './styles.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

const Header = ({ onHandlerCart, user}) => {
    const { cart } = useContext(CartContext);
    return (
        <div className="header-menu">
            <div className="header-menu-logo">
            <Link to='/' className='link-logo'><h2 className="header-logo"><img src="https://www.picgifs.com/emoticons/smileys-and-emoticons/hello-kitty/smileys-hello-kitty-692466.gif" border="0" /></h2></Link>
                
            </div>
            <div className="header-menu-cart">
                </div>
                <div onClick={onHandlerCart}>
                <img className="header-menu-cart-image"  src="https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras-by-vexels.png" alt="cart"/>
                <div className="header-menu-cart-number-container">
                    <span className="header-menu-cart-number">{cart.length}</span>
                </div>
                </div>
            </div>
    )
}

export default Header;