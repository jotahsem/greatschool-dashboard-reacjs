import React from 'react'
import './topnav.css'
import Dropdown  from '../dropdown/Dropdown'

function TopNav() {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="O que você procura?" />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown />
                </div>
                <div className="topnav__right-item">
                    <Dropdown 
                        icon="bx bx-bell"
                        badge="12"
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default TopNav
