import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import '../css/header.css';
import { Toggle } from '../components/Toggle.js';
import { Home } from '../pages/Home.js';

const Header = () => {
  return (
    <header>
        <div className="logo">          
            <img src={require('../images/MMBOutdoorsT6.png')} alt="Blog Logo" />
        </div>
        <ul>
            <li>
                <Link to='/home'><button className='button-80'>Home</button></Link>
            </li>
            <li>
                <Link to='/trips'><button className='button-80'>Trails</button></Link>
            </li>
            <li>
            <button className='button-80'>Resources</button>
            </li>
            <li>
                <Link to='/gallery'><button className='button-80'>Gallery</button></Link>
            </li>
            <li>
            <Toggle />
            </li>
        </ul>
    </header>
  );
};

export default Header;