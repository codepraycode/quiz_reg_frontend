import React from 'react';
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
    const form_config = {
        formData:{
           ...participants_data_config
        },
        steps:[
            ['passport','first_name','last_name','other_name','gender','date_of_birth'],
            ['region','province','zone','area','parish'],
            ['participant_category','quiz_category','birth_certificate','letter_of_recommendation','regional_coordinator','provincial_coordinator']
        ]
    }

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

    const renderFormContent = ()=>{
        let step = form_config.steps[0];

        let template_configs = step.flatMap((each,key)=>{
            let d_config = form_config.formData[each];

            if(!d_config) return []

            return FormIt({name:each, ...d_config, key})
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
                <Button color="primary" type="button">
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