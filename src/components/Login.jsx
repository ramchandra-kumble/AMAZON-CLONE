import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import '../styles/Login.css'
const Login = () => {


    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const getEmail = (e) =>{
        setEmail(e.target.value);
    }
    
    const getPassword = (e) =>{
        setPassword(e.target.value);
    }
    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
            alert('Sign in Successfull')
            history.push('/login');

        })
        .catch((e) => 
            alert(e.message)
        )
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then( auth => {
            alert('User Registered Successfully')
        })
        .catch((e) => alert(e.message))
    }
    return(
        <>
        <div className="login">
        <Link to='/'>
            <div className='login_logo'>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            </div>
        </Link>
        <div className="login_container">
            <h2>Sign in</h2>
            <form>
                <h5>Email</h5>
                <input type="email" onChange={getEmail}/>
                <h5>Password</h5>
                <input type="password" onChange={getPassword}/>
                <button onClick={login}>Sign in</button>
            </form>
        <p>
            By sigining in you agree to Amazon term and conditions of see out policy notice. from more details visit aur help site.
        </p>
        <button onClick={register}>Create your Amazon accout</button>
        </div>
        </div>
        </>
    );
}

export default Login;