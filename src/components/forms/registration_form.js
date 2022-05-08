import React,{useState} from 'react';
import {
  Form,
} from "reactstrap";
import { participants_data_config,participants_data } from '../../config';
import ButtonW from '../../widgets/buttons';
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
        err:null // error will be an object of field to value
        // server will return a field to value error
    });





    const handleInput = (e)=>{
        let field_type = e.target.type;
        let field_name = e.target.name;
        let field_value = e.target.value;

        let formData = state.formData;

        if(!formData[field_name]) return;

        let formConfig = state.form_config;//[field_name];
        if(field_type === 'file'){
            
            let d_file = e.target.files[0];
            let url = URL.createObjectURL(d_file);

            formData[field_name].value = d_file;
            formConfig[field_name].url = url;

        }
        
        else{
            if(!['radio','checkbox'].includes(field_type)){
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
            const considered_files = ['passport','birth_certificate','letter_of_recommendation'];

            let data = {} //new FormData()
            let files_data = new FormData();

            Object.entries(state.formData).forEach(([field,config])=>{
                // data[field] = config.value;
                if(considered_files.includes(field)){
                    files_data.append(field, config.value);
                }else{
                    data[field] = config.value;
                } 
            });

            
            current_phase +=1

            register(data,files_data,(err)=>{

                setState((prev_state)=>{
                        if(!err){
                            prev_state.current_phase = current_phase; 
                        }
                        
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
       let error_index = 0;

        if(d_phase< 1){
            d_phase = 1
        }

        let errors = state.err;

       if(errors) {
        //    let isEmpty = Object.keys(errors).length === 0;
           let first_field = Object.keys(errors)[0]

           if(first_field){
               for(let i=0; i < state.steps.length; i++){
                   let step = state.steps[i]

                   if(step.includes(first_field)){
                       error_index = i+1;
                       break
                   }
               }
           }
       }


       function getClassNames(index, last=false){
           let classname = []

           if(last && errors){
               classname.push('');
           }
           else if(d_phase >= index){
               
               classname.push(error_index === index ? 'error':'active')
           }


           return classname.join(' ');
       }
       
       return (
           <ul className="progressbar">
                <li 
                    className={getClassNames(1)}
                    id="pr"
                >
                    <strong>Participant Information</strong>
                </li>

                <li 
                className={getClassNames(2)}
                 id="tr">
                    <strong>Parish Tree</strong>
                </li>

                <li 
                    className={getClassNames(3)}
                    id="qz">
                        <strong>Quiz Setup</strong></li>

                <li 
                    className={getClassNames(4, true)}
                    id="sm">
                    <strong>Summary</strong></li>
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


   const renderError = ()=>{
       let errors = state.err;

       if(!errors) return null 
       
       let isEmpty = Object.keys(errors).length === 0;

        if(isEmpty) return null

        // There are Values
        
        if(errors.message){
            return errors.message
        }

        // get the first field
        let first_field = Object.keys(errors)[0]

        return errors[first_field]
   }

   
    const renderFormContent = ()=>{
        let d_phase = state.current_phase;
        
        if(d_phase< 1){
            d_phase = 1
        }
        else if(d_phase > state.steps.length){
            if(!state.err){
                return (
                    <>
                    {renderSummary()}
                    </>
                    
                )
            }

            d_phase = state.steps.length;
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
            <ButtonW
                type="previous"
                func={()=>{setState((prev_state)=>{
                    prev_state.current_phase -= 1; 
                   
                    return {...prev_state}
                })}}
                disabled={state.loading}
            />
            
        )

        const next_ = (
            <ButtonW 
                type="next"
            />
            
        )

        const submit = (
            <ButtonW
                type="submit"
                disable={state.loading}
            />
        )
        
        const refresh = (
            <ButtonW
                type="refresh" 
                func={()=>{
                    window.location.reload()
                }}
            />
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
        else if((current > 1 && current <= max) || state.err){
            template = (
                <>
                    {previous}
                    { current === max ? submit :next_}
                </>
            )
        }
        
        else{

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

                <span className='err text-danger'>{renderError()}</span>
                    
                <>
                    {renderProgress()}
                </>
            </div>
            {renderFormContent()}

        </div>
        
        
        
    );
};

export default RegistrationForm;