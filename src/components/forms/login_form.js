import React from 'react';

const LoginForm = (props) => {
    return (
        <form className="sign_in_form" onSubmit={(e)=>{e.preventDefault(); props.switchMode()}}>
                <h2 className="title"> Region Sign in</h2>
                <span className="err text-danger"></span>
                <div className="input_field">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <input type="email" placeholder="Region Email" />
                    
                </div>
                
                
                <div className="input_field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                    
                </div>
                
                <button type="submit" value="Login" className="btn solid">
                    Login
                    </button>
                
            </form>
        
        
    );
};

export default LoginForm;