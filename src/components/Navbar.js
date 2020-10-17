import React from 'react'
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <faIcons.FaBars />
                </Link>
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul className='nav-menu-item'>
                        <li className="navvr-toggle">
                            <Link to="#" className='menu-bars'>
                               <aiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
