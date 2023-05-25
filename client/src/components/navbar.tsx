import React from 'react';
import useScrollDirection from '../Utils/scrollDirection';
import './styles.css'

export default function NavBar() {

    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if(element) {
            element.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
    }

    const scrollDirection = useScrollDirection();

    return (
        <div className="nav">
            <nav id="navbar">
                <ul>
                    <li><button onClick={() => handleClickScroll('home')}>Home</button></li>
                    <li><button onClick={() => handleClickScroll('about')}>About</button></li>
                    <li><button onClick={() => handleClickScroll('projects')}>Projects</button></li>
                </ul>
            </nav>
        </div>
    )
}