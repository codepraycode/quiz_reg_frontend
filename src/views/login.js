import React,{useEffect} from 'react';
import LoginForm from '../components/forms/login_form';
import {REGION_LOGIN} from '../config';
import axios from 'axios';


const Login = (props) => {
    

    const handleLogin = (data, cb)=>{
        const config = {
            method: 'post',
            url: REGION_LOGIN,
            headers: { 
                'Content-Type': 'application/json', 
                // 'Cookie': 'auth=eyJhbGciOiJIUzI1NiJ9.MjBkMDc3N2QtYmJlOC00N2IyLThlYmQtMGRhYjI0OTZjNzZm.tT7oQ6OSN9oLt8Na8Dx8M6UXjEpDNjjmwenULJjMUlw'
            },
            data : data
        }

        // props.switchMode({token:'ewr89u23'});

        axios(config)
        .then(response=>{
            
            let {data} = response;
            if(!data.isAuth){
                cb(data.message);    
                return
            }

            cb(null);
            
            props.switchMode(data);
            return;
        })
        .catch(err=>{
            
            if(err.code === 'ERR_NETWORK'){
                cb('Network Error, please connect to the internet');
                return
            }


            let {response} = err;

            if(response.status === 401){
                let {data} = response;
                cb(data.message);    
                return
            }
            // if(err.)


            cb('Unable to Connect To Sever');


        });
    }

    useEffect(() => {
    document.title = "Region Login | Quiz Registration"

    return () => {
      //your cleanup code codes here
      document.title = "Quiz Registration"
    };

  }, [])

    return (
        <>
            <LoginForm {...props}  login={handleLogin}/>
        </>
    );
};

export default Login;