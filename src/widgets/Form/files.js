import React from 'react';


const ImageUpload = ({inputhandler,...config})=>{
    // let {type,url, ...rest} = config;
    
     let template = (
        <div className="file_upload center" key={config.key}>

            <div className="image_upload">
                <div className="image">
                    <img src="/assets/img/img_placeholder.svg" alt="preview" className='img-rounded'/>
                </div>

                <span><i className="fas fa-solid fa-pen"></i></span>
            </div>

            
        </div>
    )

    return template;

}

const fileWidget = (kind, config)=>{
    if(kind === 'image'){
        return ImageUpload(config);
    }

    return null;
};

export default fileWidget