import React from 'react';
import './Navbar.css'
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

const Navbar = ({setSidebar}) => {
    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img src={menu_icon}
                     className="menu_icon"
                     alt="Menu Icon"
                     onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="search"/>
                    <img src={search_icon} alt="Search Icon"/>
                </div>

            </div>
            <div className="nav-right flex-div">
            <img src={upload_icon} alt="Upload Icon"/>
                <img src={more_icon} alt="More Icon"/>
                <img src={notification_icon} alt="Notification Icon"/>
                <img src={profile_icon} alt="Profile Icon" className='user-icon'/>
            </div>
        </nav>
    );
};

export default Navbar;