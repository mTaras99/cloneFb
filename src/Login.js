//Sieeema
import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from './firebase';
import {useStateValue} from './StateProvider.js';
import {actionTypes} from './reducer';
function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
          <div className="login__logo">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            alt=""
            />
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
            alt=""
            />
          </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
