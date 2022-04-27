import React,{useState} from 'react';
import {
  Form,
  Button
} from "reactstrap";
import { participants_data_config } from '../../config';
import FormIt from '../../widgets/Form';
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
const RegistrationForm = () => {
    const [state,setState] = useState({
        form_config:{
            formData:{
            ...participants_data_config
            },
            steps:[
                ['passport','first_name','last_name','other_name','gender','date_of_birth'],
                ['region','province','zone','area','parish'],
                ['participant_category','quiz_category','birth_certificate','letter_of_recommendation','regional_coordinator','provincial_coordinator']
            ],
        },
        current_phase:1
        
    })
    

   const renderProgress = ()=>{
       let d_phase = state.current_phase;
        
        if(d_phase< 1){
            d_phase = 1
        }
        // else if(d_phase > state.form_config.steps.length){
        //     d_phase = state.form_config.steps.length;
        // }

       return (
           <ul className="progressbar">
                <li 
                    className={`${d_phase >= 1 ? "active":''}`}
                    id="pr"
                >
                    <strong>Participant Information</strong>
                </li>

                <li className={`${d_phase >= 2 ? "active":''}`} id="tr">
                    <strong>Parish Tree</strong>
                </li>
                <li className={`${d_phase >= 3 ? "active":''}`} id="qz"><strong>Quiz Setup</strong></li>
                <li className={`${d_phase >= 4 ? "active":''}`} id="sm"><strong>Summary</strong></li>
            </ul>
       )
   }

   

    const renderFormContent = ()=>{
        let d_phase = state.current_phase;
        
        if(d_phase< 1){
            d_phase = 1
        }
        else if(d_phase > state.form_config.steps.length){
            return (
                <p>Summary</p>
            )
        }

        let step = state.form_config.steps[d_phase - 1];

        let template_configs = step.flatMap((each,key)=>{
            let d_config = state.form_config.formData[each];

            if(!d_config) return []

            return FormIt({name:each, ...d_config, key, inputhandler:()=>{}})
        })

        
        return(
            <fieldset className="card">
                {template_configs}
                
            </fieldset>
        )
    }

    const renderButton =()=>{
        return (
            <div className="buttons">
                <Button color="primary" type="button" onClick={()=>{setState({...state,current_phase:state.current_phase+1})}}>
          Submit
        </Button>
            </div>
        )
    }
    return (
        <Form className="registration_form card px-0 pt-4 pb-0 mt-3 mb-3" onSubmit={(e)=>{e.preventDefault();}}>
            
                <h2 className="title">
                    Registration
                </h2>
                
                <>
                   {renderProgress()}
                </>
                

                {renderFormContent()}

                {
                    renderButton()
                }

                
            </Form>
        
        
    );
};

export default RegistrationForm;