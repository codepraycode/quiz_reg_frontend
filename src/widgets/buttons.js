import React from 'react';
import {

//   Button
} from "reactstrap";

const ButtonW = ({func, text, className, disable, ...rest}) => {

    if(!(typeof func === 'function')){
        func = ()=>{}
    }


    return (
        <button
            onClick={func}
            disabled={disable}
            className={`${className || 'btn-primary'} btn mr-5`}
            {...rest}
        >
            {text || 'Continue'}
        </button>
    )
    // const previous = (
    //     <Button 
    //         color="primary" 
    //         type="button" 
            
    //         onClick={func}
    //         disabled={disable}
    //     >
    //         Previous
    //     </Button>    
    // )

    // const next_ = (
    //     <Button 
    //         color="primary" 
    //         type="submit"
    //         className={`${className} mr-5`}
    //     >
    //             Next
    //     </Button>
    // )

    // const submit = (
    //     <Button 
    //         color="primary" 
    //         type="submit"
    //         disabled={disable}
    //     >
    //         {disable ? 'Processing...' :'Submit'}
    //     </Button>
    // )
        
    // const refresh = (
    //     <Button 
    //         color="primary" 
    //         type="button" 
    //         onClick={()=>{
    //             window.location.reload()
    //         }}
    //     >
    //         New Participant
    //     </Button>
    // )


    // const renderButton = () =>{
    //     let template = null;

    //     switch (type){
    //         case 'previous':
    //             template = previous;
    //             break;
    //         case 'next':
    //             template = next_;
    //             break;
    //         case 'submit':
    //             template = submit;
    //             break;
    //         case 'refresh':
    //             template = refresh;
    //             break;
    //         default:
    //           template = null  
    //     }


    //     return template
    // }


    // return renderButton()
};

export default ButtonW;