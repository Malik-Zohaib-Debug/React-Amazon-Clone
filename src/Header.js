import React, {useContext} from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {StateContext} from "./StateProvider";
import { authu } from "./firebase";
import "./Header.css";

function Header() {
  const {basket} = useContext(StateContext);
  const {user} = useContext(StateContext);

  let userName = "guest";
  
  if(user){
    const email = user.multiFactor.user.email;
    
    function getName(email){
      userName = "";
      var i=0;
      while(i !== email.length){
        if(email[i] === '@'){
          break;
        } else {
          userName = userName + email[i];
        }
        i++
      }
  }

    getName(email);
}

  const handleAuthentication = () => {
    if(user){
      authu.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">Hello {user ? userName: "Guest"}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket.length > 0 ? basket.length : 0}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
