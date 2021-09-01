import React from 'react'
import "../Header/Header.css"
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className = "header"> 
         <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" 
            alt="" />
            <div className="header__search">
                <SearchIcon/>
            <input type="text" />
            </div>
         </div>
         <div className="header__right">
             <HeaderOption Icon={HomeIcon} title="Home" />
             <HeaderOption Icon={SupervisorAccountIcon}  title="My Network" />
             <HeaderOption Icon={BusinessCenterIcon}  title="Jobs" />
             <HeaderOption Icon={ChatIcon}  title="Messaging" />
             <HeaderOption Icon={NotificationsIcon} title="Notifications" />
             <HeaderOption avatar="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png" title="Me"/>
         </div>
        </div>
    )
}

export default Header
