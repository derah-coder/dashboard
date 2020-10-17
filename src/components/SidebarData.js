import React from 'react';
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as ioIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home', 
        path: '/',
        icon: <aiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Reports', 
        path: '/reports',
        icon: <ioIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Products', 
        path: '/products',
        icon: <faIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Team', 
        path: '/team',
        icon: <ioIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Messages', 
        path: 'messages',
        icon: <aiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Support', 
        path: 'support',
        icon: <ioIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
    
]