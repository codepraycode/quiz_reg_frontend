import React from 'react';
import {

  Button
} from "reactstrap";

const ButtonW = ({type, func, disable}) => {

    if(!(typeof func === 'function')){
        func = ()=>{}
    }

    const previous = (
        <Button 
            color="primary" 
            type="button" 
            className="mr-5" 
            onClick={func}
            disabled={disable}
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
            disabled={disable}
        >
            {disable ? 'Processing...' :'Submit'}
        </Button>
    )
        
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


    const renderButton = () =>{
        let template = null;

        switch (type){
            case 'previous':
                template = previous;
                break;
            case 'next':
                template = next_;
                break;
            case 'submit':
                template = submit;
                break;
            case 'refresh':
                template = refresh;
                break;
            default:
              template = null  
        }


        return template
    }


    return renderButton()
};

export default ButtonW;