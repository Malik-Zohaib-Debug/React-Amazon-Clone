import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { authu } from './firebase';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        authu.signInWithEmailAndPassword(email, password)
        .then((auth) => (
            navigate("/")
        ))
        .catch(err => console.warn(err.message))
    }

    const register = (e) => {
        e.preventDefault();

        authu.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
            
    }

  return (
    <div className='login'>
        <Link to="/">
            <img className='login__logo' alt="amazon-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to Amazon's Fake Clone Condition of Use & Sale. Please see our Privacy
                Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>
        </div>
    </div>
  )
}
