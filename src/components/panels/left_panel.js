import React from 'react';

const LeftPanel = () => {
    return (
        <>
        <div className="panel left_panel">
            <div className="content">
                <div className="image_container">
                <img src="/assets/img/rccg.png" alt="Redeemed Christian Church Of God"/>
                </div>
                <h3>An Header here</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid
                </p>
                
            </div>
            
        </div>

        <div className="header">
            <div className="content">
                <h3>An Header here</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid
                </p>
                
            </div>
            
            
            
            <img src="/assets/img/log.svg" className="image" alt="" />
        </div>
        </>
        
    );
};

export default LeftPanel;