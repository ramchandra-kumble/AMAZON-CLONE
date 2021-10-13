import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider'
import './styles/Header.css'

const Nav = () => {

    const [{ basket , user}] = useStateValue();
    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
    return(
        <>
        <nav className="header">
            <div className="logo">
                <Link to='/'> {/* the difference between anchor tag and Link is tha whenever you use anchor tag the brwser will refresh*/}
                    <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
                </Link>
            </div>
            <div className="search">
                <input className='header_searchInput' type="text"/>
                <i class='bx bx-search'></i>
            </div>
            <div className="header_nav" >
                <Link className='header_Link' to={!user && '/login'}>
                    <div onClick={login} className="header_option">
                        <span className='header_optionLineOne'>Hello</span>
                        <span className='header_optionLineTwo'>{user ?  'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link className='header_Link' to='/orders'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Return</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link className='header_Link' to='/'>
                     <div className="header_option">
                      <span className='header_optionLineOne'>Your</span>
                      <span className='header_optionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link className='header_Link' to='/checkout'>
                     <div className="header_optionBasket">
                       <i className='bx bxs-cart' ></i> 
                       <span className='header_optionLineTwo basket_count'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
        </>
    );
}

export default Nav;