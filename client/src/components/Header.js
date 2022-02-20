import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import GoogleAuth from './GoogleAuth';

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
                    <Link to="/">GAuth?</Link>
                    <GoogleAuth />
                </div>
                <div className="otherLinks">
                    <Link to="/">About</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
