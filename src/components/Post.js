import React from 'react'
import './css/Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'

function Post({ userImg, text, name, timestamp }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={userImg ? userImg : null} />
                <div className="top__info">
                    <h4>{name}</h4>
                    <p>{new Date(timestamp ?. toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__middle">
               <p>{text}</p>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
