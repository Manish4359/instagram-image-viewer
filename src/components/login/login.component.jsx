import React from 'react'
import './login.styles.css'
import { useRef } from 'react'
import { useState } from 'react';

import { loginData } from '../../loginData';

function Login() {


    const userameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const username=userameRef.current.value
        const password=passwordRef.current.value

        console.log(userameRef.current.value)
        console.log(passwordRef.current.value)

        if(username==='' && password===''){
            e.target.getElementsByClassName('no-username')[0].style.visibility='visible'
            e.target.getElementsByClassName('no-pass')[0].style.visibility='visible'

            return
        }

        if(username!==loginData.username || password!==loginData.password){
            e.target.getElementsByClassName('login-error')[0].style.visibility='visible'

            e.target.getElementsByClassName('no-username')[0].style.visibility='hidden'
            e.target.getElementsByClassName('no-pass')[0].style.visibility='hidden'
        }
        else{
            alert('logged in successfully!!')
            e.target.getElementsByClassName('login-error')[0].style.visibility='hidden'

        }



    }
    return (
        <div className='login-container'>

            <h3 className='login-heading'>Login</h3>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type="text" id='username' name='username' placeholder='UserName *' ref={userameRef} />
                <span className='error no-username' style={{visibility:'hidden'}}>required</span>
                <input type="password" id='password' name='password' placeholder='Password *' ref={passwordRef} />
                <span className='error no-pass' style={{visibility:'hidden'}}>required</span>
                <span className='error login-error' style={{visibility:'hidden'}}>Incorrect username or password</span>
                <button type="submit" className='login-btn'>Login</button>
            </form>
        </div>
    )
}

export default Login