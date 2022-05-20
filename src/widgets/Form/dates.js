import React from 'react';
import {

    FormGroup,
    Input,
    FormText,

} from "reactstrap";
import { parseTxt } from "../../utils";

const Dates = ({ inputhandler, ...config }) => {
    
    let { name, err, key, ordinary, type,value,required } = config;
    let verbose = parseTxt(name, '_');

    let template = ( 
        <FormGroup key = { key } >
        
            <label htmlFor = { `${name}Input` } > { verbose } </label>


            <div className="age_bracket">
                <Input 
                    type={type}
                    name = { name } 
                    value={value }
                    className = "form-control-lg date"
                    id = { name }
                    onChange = { inputhandler }
                    required={required}
                />

                {
                    !ordinary ?
                        <span 
                            name = "age"
                            className = "form-control-lg info"
                            value = "30 years old"

                            readOnly={true}

                        >
                            -- years old
                        </span>
                    :
                    null
                }
                
            </div>

            <FormText 
                className = "ml-2 text-danger err"
                color = "default"
            > 
                { err } 
            </FormText>

        </FormGroup>
    )


    return template;

}

export default Dates;