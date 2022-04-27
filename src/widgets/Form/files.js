import React,{createRef} from 'react';
import {
  
  FormGroup,
  Input,
  FormText,
  
} from "reactstrap";
import {reprTxt} from "../utils";

const ImageUpload = ({inputhandler,...config})=>{
    // let {type,url, ...rest} = config;
    let {name,key,err,url} = config;
    // let verbose = reprTxt(name,'_');

    const imgInput = createRef();
    
     let template = (
        <div className="file_upload center" key={key}>

            <div className="image_upload">
                <div className="image">
                    <img 
                        src={url}
                        alt="preview" 
                        className='img-rounded'
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src="/assets/img/img_placeholder.svg";
                        }}
                    />
                </div>

                <input name={name} onChange={inputhandler} accept=".jpg, .png, .jpeg" type="file" ref={imgInput} />

                <span onClick={()=>{imgInput.current.click()}}><i className="fas fa-solid fa-pen"></i></span>
            </div>

            <span className="err text-danger">{err}</span>

            
        </div>
    )

    return template;

}

const FileUpload = ({inputhandler,...config})=>{
    // let {type,url, ...rest} = config;
    let {name,err,key} = config;
    let verbose = reprTxt(name,'_');
    
     let template = (
        <div className="file_upload" key={config.key}>

            <div className="file">
                <FormGroup key={key}>
                    <label htmlFor={`${name}Input`}>{verbose}</label>
                    
                    <Input
                        name={name}
                        type="file"
                        className="form-control-lg"
                        id={name}
                        onChange={inputhandler}
                    />

                    <FormText className="ml-2 text-danger err" color="default" >
                        {err}
                    </FormText>

                </FormGroup>
            </div>

            
        </div>
    )

    return template;

}

const fileWidget = (kind, config)=>{
    if(kind === 'image'){
        return ImageUpload(config);
    }
    

    return FileUpload(config);
};

export default fileWidget