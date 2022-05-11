import React from 'react';
import Login from './login';
import Registration from './registration'


const Views = ({switchMode,loggedIn, authData}) => {
    // console.log(authData)
    return (
        <>
            {
                !loggedIn ?
                <Login switchMode={switchMode}/>
                :
                <Registration switchMode={switchMode} authData={authData}/>
                
                // :
                // 
                
            }
            
        </>
    );
};

export default Views;