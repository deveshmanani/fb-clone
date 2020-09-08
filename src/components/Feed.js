import React, { useState, useEffect } from 'react'
import Story from './Story'
import './css/Feed.css'
import InputBox from './InputBox'
import Post from './Post'
import db from '../firebase'

function Feed() {
    const [posts, setPosts] = useState([])
    console.log('posts => ', posts);


    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(res => (
            // console.log('res => ', res.docs[0].data())

            setPosts(res.docs.map(val => ({ id: val.id, data: val.data() })))
        ))
    }, [])
    return (
        <div className="feed">
            <Story />
            <InputBox />
            {posts.map(res => (
                <Post
                    key={res.id}
                    text={res.data.text}
                    name={res.data.name}
                    timestamp={res.data.timestamp}
                    userImg={res.data.userImg}
                />
            ))}
        </div>
    )
}

export default Feed
