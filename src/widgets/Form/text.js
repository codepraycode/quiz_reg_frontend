import React from 'react';
import {

    FormGroup,
    Input,
    FormText,

} from "reactstrap";
import { parseTxt } from "../../utils";

const TextInput = ({ inputhandler, ...config }) => {
    let { name, err, key, value, readOnly,required} = config;
    let verbose = parseTxt(name, '_');

    let template = ( 
        <FormGroup key = { key } >
            <label htmlFor = { `${name}` } > { verbose } </label>

            <Input 
                name = { name } 
                value = {value }
                className = "form-control-lg"
                id = { name }
                onChange = { inputhandler }
                required={required}
                readOnly={readOnly || false}
            />

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

export default TextInput;