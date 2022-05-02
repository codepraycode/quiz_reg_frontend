import React,{useState} from 'react';
import {
  Form,
  Button
} from "reactstrap";
import { participants_data_config,participants_data } from '../../config';
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
const RegistrationForm = ({register}) => {
    const initialState = {
        formData:{
            ...participants_data,
        },
        form_config:{
            ...participants_data_config
        },
        steps:[
            ['passport','first_name','last_name','other_name','gender','date_of_birth'],
            ['region','province','zone','area','parish'],
            ['participant_category','quiz_category','birth_certificate','letter_of_recommendation','regional_coordinator','provincial_coordinator']
        ],
        current_phase:1
    }

    const [state,setState] = useState({
        ...initialState,
        loading:false,
        err:null
    });





    const handleInput = (e)=>{
        let field_type = e.target.type;
        let field_name = e.target.name;
        let field_value = e.target.value;

        // console.log(field_type,field_name,field_value);

        let formData = state.formData;

        if(!formData[field_name]) return;

        let formConfig = state.form_config;//[field_name];
        // console.log(formConfig)
        if(field_type === 'file'){
            
            let d_file = e.target.files[0];
            let url = URL.createObjectURL(d_file);

            formData[field_name].value = d_file;
            formConfig[field_name].url = url;

        }
        
        else{
            if(!['radio','checkbox'].includes(field_type)){
                // console.log(field_name,field_value)
                e.preventDefault();
            }
            
            formData[field_name].value = field_value;

        }


        setState((prev_state)=>{
            prev_state.formData = formData;
            prev_state.form_config = formConfig
            return {...prev_state}
        })


        

    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        let current_phase = state.current_phase;
        let max = state.steps.length;

        
        if(current_phase <1 || (current_phase >= 1 && current_phase < max)){
            current_phase += 1;
            
            setState((prev_state)=>{
                    prev_state.current_phase = current_phase; 
                    return {...prev_state}
                }
            )
            return;
        }
        else if(current_phase === max){
            let data = new FormData()

            Object.entries(state.formData).forEach(([field,config])=>{
                // data[field] = config.value;
                data.append(field, config.value);
            });

            // console.log("Gathering Data", data);
            current_phase +=1

            register(data,(err)=>{
                setState((prev_state)=>{
                        prev_state.current_phase = current_phase; 
                        prev_state.loading = false;
                        prev_state.err = err
                        return {...prev_state}
                        
                    }
                );
            })


            setState((prev_state)=>{
                    // prev_state.current_phase = current_phase; 
                    prev_state.loading = true;
                    prev_state.err = null
                    return {...prev_state}
                    
                }
            )
            // return;
        }

        
        
    }

   const renderProgress = ()=>{
       let d_phase = state.current_phase;
        
        if(d_phase< 1){
            d_phase = 1
        }


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
   const renderSummary = ()=>{
       return(
           <>
                <div className="success card">
                    <h2>Participant Registration Successful</h2>
                    <span className="check">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </span>
                    {
                    renderButton()
                }   
                </div>

                
           </>
            
       )
   }

   
    const renderFormContent = ()=>{
        let d_phase = state.current_phase;
        
        if(d_phase< 1){
            d_phase = 1
        }
        else if(d_phase > state.steps.length){
            return (
                <>
                   {renderSummary()}
                </>
                
            )
        }

        let step = state.steps[d_phase - 1];

        let template_configs = step.flatMap((each,key)=>{
            let d_config = state.form_config[each];
            

            if(!d_config) return []
            let value = state.formData[each].value
            d_config.value = value;

            return FormIt({name:each, ...d_config, key, inputhandler: (event)=>handleInput(event) })
        })

        
        return(
            <Form onSubmit={handleSubmit}>
            <fieldset className="card">
                {template_configs}
                
            </fieldset>

            {
                    renderButton()
                }
            </Form>
        )
    }

    const renderButton =()=>{
        const previous = (
            <Button 
                color="primary" 
                type="button" 
                className="mr-5" 
                onClick={()=>{setState((prev_state)=>{
                    prev_state.current_phase -= 1; 
                    // console.log(prev_state)
                    return {...prev_state}
                })}}
                disabled={state.loading}
            >
                Previous
            </Button>
            
        )

        const next_ = (
            <Button color="primary" type="submit">
                    Next
                </Button>
            
        )

         const submit = (
        <Button 
            color="primary" 
            type="submit"
            disabled={state.loading}
        >
            {state.loading ? 'Processing...' :'Submit'}
        </Button>)
        
        const refresh = (
        <Button 
            color="primary" 
            type="button" 
            onClick={()=>{
                window.location.reload()
            }}
        >
            New Participant
        </Button>
            
        )

        let template = null;
        let current = state.current_phase;
        let max = state.steps.length;

        if(current <= 1){
            template = (
                <>
                    {next_}
                </>
            )
        }
        else if(current > 1 && current <= max){
            template = (
                <>
                    {previous}
                    { current === max ? submit :next_}
                </>
            )
        }
        
        else{
            // console.log("refresh")
            template = (
                <>
                    {refresh}
                </>
            )
        }

        return (
            <div className="buttons">
                {template}
            </div>
        )
    }

    return (
        <div className="registration_form card px-0 pt-4 pb-0 mt-3 mb-3">
            <div className="form_head">
                <h2 className="title">
                    Registration
                </h2>
                    
                <>
                    {renderProgress()}
                </>
            </div>
            {renderFormContent()}

        </div>
        
        
        
    );
};

export default RegistrationForm;