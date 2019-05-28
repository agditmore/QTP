import React from 'react';
import Instagram from './Images/Instagram.png'

const Header = () => {
    return(
        <div id="header-div">
            <img src={Instagram} alt="pupstagram logo" id="pupstagram-logo"/>
            <h1>Pupstagram</h1>
        </div>
    )
}

export default Header;