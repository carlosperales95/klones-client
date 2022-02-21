import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import GoogleAuth from './GoogleAuth';
import userPic from "./user_pic.jpg";

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="headerLeftDivision">
                <div className="headerLogo">
                    <Link to="/"></Link>
                </div>
                <div className="headerTitle">
                    <Link to="/">KloneStrem</Link>
                </div>
            </div>
            <div className="headerRightDivision">
                <div className="otherLinks">
                    <Link to="/">About</Link>
                </div>
                <div className="otherLinks">
                    <a to="/" className="userLogo">
                        <img className="userLogo" src={userPic} alt=""/>
                    </a>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}

export default Header;
