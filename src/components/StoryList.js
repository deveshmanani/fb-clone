import React from 'react'
import './css/StoryList.css'
import { Avatar } from '@material-ui/core'

function StoryList({ userImg, name, img }) {
    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className="storylist">
            <Avatar className="storylist__img" src={userImg} />
            <h4>{name}</h4>
        </div>
    )
}

export default StoryList
