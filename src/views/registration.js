import React,{useEffect} from 'react';
import RegistrationForm from '../components/forms/registration_form';


const Registration = (props) => {

  const handleRegistration = (data, cb)=>{
        // const config = {
        //     method: 'post',
        //     url: REGION_LOGIN,
        //     headers: { 
        //         'Content-Type': 'application/json', 
        //         // 'Cookie': 'auth=eyJhbGciOiJIUzI1NiJ9.MjBkMDc3N2QtYmJlOC00N2IyLThlYmQtMGRhYjI0OTZjNzZm.tT7oQ6OSN9oLt8Na8Dx8M6UXjEpDNjjmwenULJjMUlw'
        //     },
        //     data : data
        // }

        // props.switchMode({token:'ewr89u23'});

        console.log("Submitting Data", data);

        setTimeout(()=>{
          cb(null)
        }, 3500)


        
    }
    
    useEffect(() => {
      document.title = "Participant Registration | Quiz Registration"

      return () => {
        //your cleanup code codes here
        document.title = "Quiz Registration"
      };

    }, [])

    return (
        <>
            <RegistrationForm {...props}  register={handleRegistration}/>
        </>
    );
};

export default Registration;