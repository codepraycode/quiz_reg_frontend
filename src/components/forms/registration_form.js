import React from 'react';

const RegistrationForm = () => {
    return (
        <form className="registration_form">
                <h2 className="title">Registration</h2>
                
                <div className="input_field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                </div>
                
                <div className="input_field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                
                <button type="submit" value="Login" className="btn solid">
                    Submit
                    </button>
                
            </form>
        
        
    );
};

export default RegistrationForm;