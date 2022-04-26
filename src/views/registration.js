import React,{useEffect} from 'react';
import RegistrationForm from '../components/forms/registration_form';


const Registration = (props) => {

    
    useEffect(() => {
    document.title = "Participant Registration | Quiz Registration"

    return () => {
      //your cleanup code codes here
      document.title = "Quiz Registration"
    };

  }, [])

    return (
        <>
            <RegistrationForm {...props}/>
        </>
    );
};

export default Registration;