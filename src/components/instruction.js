import React from 'react';

const Instruction = () => {
    return (
        <div className={"card instruction"}>

            <div className="card_header">
                <h3>Portal Instructions</h3>
            </div>

            <div className="card_body">
                <p>
                    Hello! This is a new School Information System for you. It is user friendly. The platform ensures a seamless interaction. You can register for the session, manage your documents, register your courses, and access your course materials with more flexibilities than before. Provide your matriculation number/email and password to access your account. Your Password is your last name, in lowercase (e.g. "Aremu" being your last name, your password would be "aremu"). All admitted students can login with their application number pending the time they are issued matriculation numbers.
                </p>


                <p className="help">
                Need help?
                <br/>
                SMS/Call 0807 759 3559, 0807 759 3552 
                <br/>
                or Email ssu@dlc.ui.edu.ng
                </p>
            </div>

            
            
        </div>
    );
};

export default Instruction;