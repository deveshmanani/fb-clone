import React from 'react'
import './css/Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from '../Provider'
import { actionTypes } from '../reducer'

function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider).then(res => {
            console.log('res => ', res);
            dispatch({
                type:actionTypes.SET_USER,
                user: res.user
            })

        }).catch(err => {
            console.log('err => ', err);
            dispatch({
                type:actionTypes.SET_USER,
                user: null
            })
        })
    }
    return (
        <div className="login">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <h4>Facebook</h4>
            </div>
            <Button type="submit" onClick={signIn}>
                SignIn
            </Button>
        </div>
    )
}

export default Login
