import React from 'react'
import './css/Header.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../Provider';
import { actionTypes } from '../reducer';

function Header() {
    const [{user}, dispatch] = useStateValue()
    const logout = () => {
        dispatch({
            type:actionTypes.SET_USER,
            user: null
        })
    }
    return (
        <div className="header">
            <div className="header__left">
                <FacebookIcon />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" className="header__search" placeholder="Search..." />
                </div>
            </div>
            <div className="header__center">
                <div className="header___option active">
                    <HomeIcon />
                </div>
                <div className="header___option">
                    <FlagIcon />
                </div>
                <div className="header___option">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="header___option">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="header___option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>
            <div className="header__right">
                <div className="header___info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                <IconButton onClick={logout}>
                    <ExitToAppIcon />
                    <p>Logout</p>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
