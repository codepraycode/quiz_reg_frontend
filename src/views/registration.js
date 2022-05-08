import React,{useEffect} from 'react';
import RegistrationForm from '../components/forms/registration_form';
import {REGISTER,PARTICIPANT} from '../config';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Registration = (props) => {
  const [cookies] = useCookies(['auth']);

  


  const makeRequest = (request_config)=>{
    return new Promise((resolved,rejected)=>{
      axios(request_config)
        .then(response=>{
            
            let {data} = response;
            
            if(!data.isAuth){
              rejected(data.message);    
              return
            }
            
            resolved(data)
            return


        })
        .catch(err=>{
            
            if(err.code === 'ERR_NETWORK'){
                //cb('Network Error, please connect to the internet');
                rejected('Network Error, please connect to the internet')
                return
            }


            let {response} = err;

            if(response.status === 401){
                let {data} = response;
                // cb(data.message);    
                rejected(data.message)
                return
            }
            // if(err.)


            // cb('Unable to Connect To Sever');
            rejected('Unable to Connect To Sever');
            return


        });
    })
    
  }


  const uploadFiles = (files)=>{
    const request_config = {
          method: 'post',
          url: PARTICIPANT,
          headers: { 
              'Content-Type': 'multipart/form-data',
              'Cookie': `auth=${cookies.auth}`
          },
          data : files
      }


      return new Promise((resolved, rejected)=>{
        makeRequest(request_config)
        .then(data=>{

            if(!data.isAuth){
              rejected(data.message);    
              return
            }

            resolved(data)
            return

        })
        .catch(err=>{
          rejected({message:err});
          return
        })
      })



  }


  const handleRegistration = (data, files=null, cb)=>{
        // data.append('token', cookies.auth)
      const request_config = {
          method: 'post',
          url: REGISTER,
          headers: { 
              'Content-Type': 'application/json', 
              // 'Content-Type': 'multipart/form-data',
              'Cookie': `auth=${cookies.auth}`
          },
          data : {...data}
          // {
          //   ...data,
          //   token:cookies.auth
          // }
      }

      //  console.log("Submitting Data", data);


       makeRequest(request_config)
       .then(()=>{

         

          // Uploading Files

         
          if(!files){
            cb(null);
            return
          }

          uploadFiles(files)
          .then(data=>{
            cb(null);
            return
          })
          .catch(err=>{
            cb({message:err})
            return
          })
           
          

       })
       .catch(err=>{
         cb({message:err});
         return
       })
      
      


        
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