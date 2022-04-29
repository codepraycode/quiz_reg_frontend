import React from 'react';
import Login from './login';
import Registration from './registration'


const Views = ({switchMode,loggedIn}) => {
    
    return (
        <div className="form_container">
            {
                !loggedIn ?
                <Login switchMode={switchMode}/>
                :
                <Registration switchMode={switchMode}/>
                
                // :
                // 
                
            }
            
        </div>
    );
};

export default Views;