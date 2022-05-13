import React from 'react';
import {

    FormGroup,
    Input,
    FormText,

} from "reactstrap";
import { parseTxt } from "../../utils";

const TextInput = ({ inputhandler, ...config }) => {
    let { name, err, key, ...rest } = config;
    let verbose = parseTxt(name, '_');

    let template = ( 
        <FormGroup key = { key } >
            <label htmlFor = { `${name}Input` } > { verbose } </label>

            <Input 
                name = { name } {...rest }
                className = "form-control-lg"
                id = { name }
                onChange = { inputhandler }
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