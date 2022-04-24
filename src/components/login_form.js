import React from 'react';

const LoginForm = (props) => {
    return (
        <form className="sign_in_form" onSubmit={(e)=>{e.preventDefault(); props.switchMode()}}>
                <h2 className="title">Sign in</h2>
                
                <div className="input_field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                </div>
                
                <div className="input_field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                
                <input type="submit" value="Login" className="btn solid" />
                
            </form>
        
        
    );
};

export default LoginForm;