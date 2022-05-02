import React from 'react';
import Login from './login';
import Registration from './registration'


const Views = ({switchMode,loggedIn, authData}) => {
    // console.log(authData)
    return (
        <div className="form_container">
            {
                !loggedIn ?
                <Login switchMode={switchMode}/>
                :
                <Registration switchMode={switchMode} authData={authData}/>
                
                // :
                // 
                
            }
            
        </div>
    );
};

export default Views;