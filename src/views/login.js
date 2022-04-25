import React from 'react';
import LoginForm from '../components/forms/login_form';


const Login = (props) => {
    return (
        <>
            <LoginForm {...props}/>
        </>
    );
};

export default Login;