import React, {useState} from 'react'
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import {sidebarData, SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider valuer={{color: '#fff'}}></IconContext.Provider>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <faIcons.FaBars onClick={showSidebar} style={{color: "#fff"}} />
                </Link>
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul className='nav-menu-items'  onClick={showSidebar}>
                        <li className="navbar-toggle">  
                            <Link to="#" className='menu-bars'>
                               <aiIcons.AiOutlineClose onClick={showSidebar} style={{color: "#fff"}}/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index)=> {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
