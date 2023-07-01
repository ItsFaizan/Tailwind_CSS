import React from 'react';
import loginImg from '../assets/login.jpg'
function Login()  {

        return (
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='hidden sm:block'>
                <img src={loginImg} alt="login" />
                </div>

                <div>
                    <form>
                        <h2>SIGN I</h2>
                        <div>
                            <label>User Name</label>
                            <input type="text" placeholder="User Name" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div>
                            <p><input type='checkbox'/> Remember Me</p>
                            <p>Forgot Password</p>
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        );
    
}

export default Login;