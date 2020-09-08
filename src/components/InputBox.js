import React, { useState } from 'react'
import './css/InputBox.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../Provider'
import db from '../firebase'
import firebase from 'firebase'

function InputBox() {
    const [{ user }, dispatch] = useStateValue()
    let [value, setInputValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            userImg: user.photoURL,
            text: value,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('posts').add(data)

        setInputValue('')
    }
    return (
        <div className="inputBox">
            <div className="inputBox__inputWrap">
                <Avatar src={user.photoURL} />
                <form onSubmit={handleSubmit}>
                    <input className="inputBox__input" placeholder={`What's on your mind ? ${user.displayName}`} value={value} onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={handleSubmit} type="submit">Hidden</button>
                </form>
            </div>
            <div className="inputBox__select">
                <div className="inputBox__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="inputBox__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="inputBox__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default InputBox
