import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = ()=>{
        if(user)
            auth.signOut();
    }
    return (
        <div className='header'>
            <Link to="/">
            <img src ="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="header__logo" />
            </Link>
            <div
                className="header__search">
                    <input 
                    className="header__searchInput" type="text"/>
                    <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span
                        className="header__optionLineOne">{user?user.email:"Hello Guest"}
                    </span>
                    <span
                        className="header__optionLineTwo">{user?'Sign out':'Sign in'}
                    </span>
                </div>
                </Link>
                <div className="header__option">
                <span
                        className="header__optionLineOne">Returns
                    </span>
                    <span
                        className="header__optionLineTwo">& Orders
                    </span>
                </div>
                <div className="header__option">
                <span
                        className="header__optionLineOne">your
                    </span>
                    <span
                        className="header__optionLineTwo">Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <Link to='/checkout'>
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
