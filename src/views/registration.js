import React,{useEffect} from 'react';
import RegistrationForm from '../components/forms/registration_form';
import {REGISTER} from '../config';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Registration = (props) => {
  const [cookies] = useCookies(['auth']);


  const makeRequest = (request_config) => {
    return new Promise((resolved, rejected) => {
        // console.log(request_config)
        axios(request_config)
            .then(response => {

                let { data } = response;

                

                // if (data.isAuth) {
                //     rejected(data.message);
                //     return
                // }

                resolved(data)
                return


            })
            .catch(err => {

                if (err.code === 'ERR_NETWORK') {
                    //cb('Network Error, please connect to the internet');
                    rejected('Network Error, please connect to the internet')
                    return
                }


                let { response } = err;

                

                if (response.status === 401) {
                    let { data } = response;
                    // cb(data.message);    
                    rejected(data)
                    return
                }
                // if(err.)
                if (response.status === 400) {
                    let { data } = response;
                    
                    // cb(data.message);  
                    // console.log(response)
                    rejected(data)
                    return
                }

                // console.log(response)

                // console.log(response)


                // cb('Unable to Connect To Sever');
                rejected({message:'Unable to Connect To Sever'});
                // rejected(response.data);
                return


            });
    })

  }


  // const uploadFiles = (files, url)=>{
  //   // files
  //   const request_config = {
  //         // method: 'post',
  //         // url,
  //         headers: { 
  //             // 'Content-Type': 'multipart/form-data',
  //             ...files.getHeaders(),
  //             'x-access-token': cookies.auth
  //         },
  //         // data : files
  //     }


  //     return new Promise((resolved, rejected)=>{

        
  //       axios.post(url, files, request_config)
  //       .then(response=>{
  //         console.log(response);

  //         let {data} = response;
  //           // if(!data.isAuth){
  //           //   rejected(data.message);    
  //           //   return
  //           // }

  //           resolved(data)
  //           return

  //       })
  //       .catch(err_re=>{

  //         console.log(err_re)

  //         let {data} = err_re
  //         rejected(data);
  //         return
  //       })
  //     })



  // }


  const handleRegistration = (data, files=null, cb)=>{
        // data.append('token', cookies.auth)
      const request_config = {
          method: 'post',
          url: REGISTER,
          headers: { 
              'Content-Type': 'application/json', 
              'x-access-token': cookies.auth
          },
          data
      }


      
      makeRequest(request_config)
       .then((data)=>{

          // console.log("Participant Data",data)

          // let {_id:id} = data;


          cb(null);
          
         

          // Uploading Files

         
          // if(!files){
          //   cb(null);
          //   return
          // }

          // uploadFiles(files, getFileUploadURl(id))
          // .then(data=>{
          //   console.log("New Data", data)
          //   cb(null);
          //   return
          // })
          // .catch(err=>{
          //   console.log("File Upload Error")
          //   cb(err)
          //   return
          // })
           
          

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