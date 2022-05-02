import React,{useEffect} from 'react';
import RegistrationForm from '../components/forms/registration_form';
// import {REGISTER} from '../config';
// import axios from 'axios';
// import { useCookies } from 'react-cookie';

const Registration = (props) => {
  // const [cookies] = useCookies(['auth']);

  const handleRegistration = (data, cb)=>{
        // data.append('token', cookies.auth)
        // const config = {
        //     method: 'post',
        //     url: REGISTER,
        //     headers: { 
        //         // 'Content-Type': 'application/json', 
        //         'Content-Type': 'multipart/form-data',
        //         // 'Cookie': `auth=${cookies.auth}`
        //     },
        //     data : data
        // }

        // console.log(cookies.auth)

        // console.log(props.authData)

        // props.switchMode({token:'ewr89u23'});

        console.log("Submitting Data", data);
        cb(null);
        // setTimeout(()=>{
        //   cb(null)
        // }, 3500)
        
        // axios(config)
        // .then(response=>{
            
        //     let {data} = response;
        //     if(!data.isAuth){
        //         cb(data.message);    
        //         return
        //     }

        //     cb(null);
            
        //     // props.switchMode(data);
        //     return;
        // })
        // .catch(err=>{
            
        //     if(err.code === 'ERR_NETWORK'){
        //         //cb('Network Error, please connect to the internet');
        //         console.log('Network Error, please connect to the internet')
        //         cb(null)
        //         return
        //     }


        //     let {response} = err;

        //     if(response.status === 401){
        //         let {data} = response;
        //         // cb(data.message);    
        //         console.log(data.message)
        //         cb(null)
        //         return
        //     }
        //     // if(err.)


        //     // cb('Unable to Connect To Sever');
        //     console.log('Unable to Connect To Sever');
        //     cb(null)


        // });


        
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