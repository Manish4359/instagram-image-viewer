import React from 'react'
import './login.styles.css'
import { useRef } from 'react'

function Login() {


    const userameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(userameRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div className='login-container'>

            <h3 className='login-heading'>Login</h3>
            <form className='login-form' onSubmit={handleSubmit}>
                <input type="text" id='username' name='username' placeholder='UserName *' ref={userameRef} />
                <input type="password" id='password' name='password' placeholder='Password *' ref={passwordRef} />

                <button type="submit" className='login-btn'>Login</button>
            </form>
        </div>
    )
}

export default Login