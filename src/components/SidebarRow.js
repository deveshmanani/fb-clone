import React from 'react'
import { Avatar } from '@material-ui/core'
import './css/SidebarRow.css'

function SidebarRow({ userImg, Icon, title }) {
    return (
        <div className="sidebar__row">
            {userImg && <Avatar src={userImg} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
