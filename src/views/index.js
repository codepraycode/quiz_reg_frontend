import React from 'react';
import Login from './login';
import Registration from './registration'
const Views = ({switchMode,loggedIn}) => {
    
    return (
        <div className="form_container">
            {
                loggedIn ?
                <Registration switchMode={switchMode}/>
                :
                <Login switchMode={switchMode}/>
            }
            
        </div>
    );
};

export default Views;