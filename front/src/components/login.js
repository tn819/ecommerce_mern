import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { login, register } from "../action";

function Login (props) {

    const [registerForm, setRegisterForm] = useState({email:'',firstname:'',lastname:'',username:'',password:''})
    const [loginForm, setLoginForm] = useState({username:'',password:''})

    const handleClick = (e) => {
        e.preventDefault();
        
        if(e.target.parentElement.id === 'register'){
            props.dispatch(register(registerForm))
        }else if(e.target.parentElement.id === 'login') {
            props.dispatch(login(loginForm))
        }
    };

    const handleChange = (e) => {
        if(e.target.parentElement.id === 'register'){
            setRegisterForm({...registerForm, [e.target.name]: e.target.value})
        }else if(e.target.parentElement.id === 'login') {
            setLoginForm({...loginForm, [e.target.name]: e.target.value})
        }

        
    }

    const { from } = props.location.state || {
        from: { pathname: "/" },
    };

    if (props.username) {
        return <Redirect to={from} />;
    }

    return (
        <div>
            <p>You must log in to view the page</p>
            Register a new account
            <form id='register'>        
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' value={registerForm.email} onChange={handleChange}/>
                <label htmlFor='firstname'>First Name</label>
                <input type='text' name='firstname' id='firstname' value={registerForm.firstname} onChange={handleChange}/>
                <label htmlFor='lastname'>Last Name</label>
                <input type='text' name='lastname' id='lastname' value={registerForm.lastname} onChange={handleChange}/>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='register_username' value={registerForm.username} onChange={handleChange}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='register_password' value={registerForm.password} onChange={handleChange}/>
                <button type='submit' onClick={handleClick}>Register</button>
            </form>

            <form id='login'>        
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='login_username' value={loginForm.username} onChange={handleChange}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='login_password' value={loginForm.password} onChange={handleChange}/>
                <button type='submit' onClick={handleClick}>Login</button>
            </form>
            
        </div>
    );
    
}

function mapStateToProps(state) {
    return {
      username: state.username,
    };
  };

export default connect(mapStateToProps)(Login);
