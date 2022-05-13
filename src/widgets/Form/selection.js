
import React from 'react';
import {
  FormGroup,
  Input,
  Label,
  FormText
} from "reactstrap";
import { parseTxt } from '../../utils';

// import axios from 'axios';


const RadioBox = ({inputhandler,...config})=>{
    // let {type,url, ...rest} = config;
    
    let {name,err,key,options} = config;
    let verbose = parseTxt(name,'_');

    let template = [] 
    
    if(options){
        template = options.map((each,i)=>{
            let option = parseTxt(each,'_');
            return (
                <FormGroup key={i} check className="form-check-radio" inline>
                    <Label check>
                        <Input
                            // defaultValue="option1"
                            id={name}
                            name={name}
                            value={each}
                            type="radio"
                            onChange={inputhandler}
                        />
                        {option}
                        <span className="form-check-sign"></span>
                    </Label>
                </FormGroup>
            )
        })
    }
    

    return <FormGroup key={key} className="radios">
            <label>{verbose}</label><br/>
            <div className="options">
                {template}
            </div>
            <FormText className="ml-2 text-danger err" color="default" >
                {err}
            </FormText>
        </FormGroup>;

}

const CheckBox = ({inputhandler,...config})=>{
    // let {type,url, ...rest} = config;
    
    let {name,value, options, err,key,} = config;
    let verbose = parseTxt(name,'_');

    let template = [] 
    
    if(options){
        template = options.map((each,i)=>{
            return (
                <FormGroup key={i} check className="form-check-radio" inline>
                    <Label check>
                        <Input
                            defaultValue="option1"
                            id={name}
                            name={name}
                            value={value}
                            type="checkbox"
                            onChange={inputhandler}
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



const Selelction = ({inputhandler,cookies,...config})=>{
  
    let {name,value, options, err,key,} = config;

    let mapper = {}

    let verbose = parseTxt(name,'_');

    let template_options = options.map((each, i)=>{
        let val;

        if(each instanceof Object){
            let {_id:id, name} = each;
            mapper[name] = id

            val = parseTxt(name,'_')

            // return (   
            //     <option key={i}>{name}</option>
            // )
        }else{
            val = parseTxt(each,'_')
        }

         

        return (   
            <option key={i}>{val}</option>
        )
    });

        
    
    let template =  <Input
                    className="form-control-lg" 
                    type="select"
                    id={name}
                    name={name}
                    value={value}
                    onChange={inputhandler}
                    
                >
                    <option key="-1283">----</option>
                    {template_options}
                </Input>
        

    return (
        <FormGroup key={key} className="selection">
            
            <label htmlFor = { `${name}` } > { verbose } </label>

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

    if(kind === 'select'){
        return Selelction(config)
    }

    return null;
};

export default selectWidget;