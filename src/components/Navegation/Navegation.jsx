import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router';

export default function Navegation() {
    const [hi, setHi] = useState(false);

    return (
        <nav className='boot d-flex wrap justify-content-between p-5'>
            <div className='go d-flex justify-content-between m-4'>
                <h4>
                    <Link to="/">Rick & Morty</Link>
                </h4>
                <img
                    className='hamb'
                    src="./src/components/Navegation/list.svg"
                    alt="Menu"
                    onClick={() => { console.log(hi);setHi(!hi)}}
                />
            </div>

            {hi===true ?<span></span>:
                <ul className='four'>
                    <button className='reb btn botonHome rounded-3 text-white'>
                        <Link to="/Characters">Characters</Link>
                    </button>
                    <button className='reb btn botonHome rounded-3 text-white'>
                        <Link to="/Contact">Contact</Link>
                    </button>
                </ul>}
            
        </nav>
    );
}
