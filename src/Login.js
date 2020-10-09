import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        //firebase shit
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=> {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to= '/'>
                <img className="login__logo" src = "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <button type='submit' onClick={signIn} className="login__signinbutton">
                        Sign In
                    </button>


                </form>
                <p>
                    By Signing in you are agreeing to all the conditions
                </p>

                <button onClick={register} className="login__registerbutton">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
