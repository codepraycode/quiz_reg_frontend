import React from 'react';
import {
  
  FormGroup,
  Input,
  Label,
  FormText
  
} from "reactstrap";
import { reprTxt } from '../utils';

const RadioBox = ({inputhandler,...config})=>{
    // let {type,url, ...rest} = config;
    
    let {name,value,err,key,options} = config;
    let verbose = reprTxt(name,'_');

    let template = [] 
    
    if(options){
        template = options.map((each)=>{
            return (
                <FormGroup check className="form-check-radio" inline>
                    <Label check>
                        <Input
                            defaultValue="option1"
                            id={name}
                            name={name}
                            value={value}
                            type="radio"
                        />
                        {each}
                        <span className="form-check-sign"></span>
                    </Label>
                </FormGroup>
            )
        })
    }
    

    return <FormGroup key={key}>
            <label>{verbose}</label><br/>
            {template}
            <FormText className="ml-2 text-danger err" color="default" >
                {err}
            </FormText>
        </FormGroup>;

}

const CheckBox = ({inputhandler,...config})=>{
    // let {type,url, ...rest} = config;
    
    let {name,value, options, err,key,} = config;
    let verbose = reprTxt(name,'_');

    let template = [] 
    
    if(options){
        template = options.map((each)=>{
            return (
                <FormGroup check className="form-check-radio" inline>
                    <Label check>
                        <Input
                            defaultValue="option1"
                            id={name}
                            name={name}
                            value={value}
                            type="checkbox"
                        ></Input>
                        {each}{" "}
                        <span className="form-check-sign">
                            <span className="check"></span>
                        </span>
                    </Label>
                </FormGroup>
            )
        })
    }
    

    return (
        <FormGroup key={key}>
            <label>{verbose}</label>
            {template}
            <FormText className="ml-2 text-danger err" color="default" >
                {err}
            </FormText>
        </FormGroup>
    );

}

const selectWidget = (kind, config)=>{
    if(kind === 'radio'){
        return RadioBox(config);
    }

    if(kind === 'check'){
        return CheckBox(config);
    }

    return null;
};

export default selectWidget;