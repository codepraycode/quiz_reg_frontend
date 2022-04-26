import React from 'react';

const RegistrationForm = () => {
    /* 
        step 1:
            - passport
            - first name
            - other name
            - last name
            - gender
            - date_of_birth, age
        step 2:
            - region
            - province
            - zone
            - area
            - parish
        step 3:
            - participant category
            - quiz_category
            - birth_certificate
            - letter of recommendation
            - regional_coordinator
            - provincial_coordinator
        step 4:
            * summary and submit

    */
   const renderProgress = ()=>{
       return (
           <ul className="progressbar">
                <li className="active" id="pr">
                    <strong>Participant Information</strong></li>
                <li  id="tr"><strong>Parish Tree</strong></li>
                <li id="qz"><strong>Quiz Setup</strong></li>
                <li id="sm"><strong>Summary</strong></li>
            </ul>
       )
   }
    return (
        <form className="registration_form card px-0 pt-4 pb-0 mt-3 mb-3" onSubmit={(e)=>{e.preventDefault();}}>
            
                <h2 className="title">
                    Registration
                </h2>
                
                <>
                   {renderProgress()}
                </>

                {/* <div className="input_field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                    
                </div>
                
                <div className="input_field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                
                <button type="submit" value="Login" className="btn solid">
                    Submit
                    </button> */}
                
            </form>
        
        
    );
};

export default RegistrationForm;