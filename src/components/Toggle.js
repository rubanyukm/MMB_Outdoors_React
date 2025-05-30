import { setTheme } from '../utils/themes';
import React, { useEffect, useState } from 'react';
import '../css/toggle.css';

export function Toggle() {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    if (togClass === 'dark') {
        return (
            <label class="switch">
            <input type="checkbox" onClick={handleOnClick}/>
            <span class="slider round"></span>
            </label>
        )
    } else if (togClass === 'light') {
        return ( 
            <label class="switch">
            <input type="checkbox" onClick={handleOnClick}/>
            <span class="slider round"></span>
            </label>
        )
    }
    
}