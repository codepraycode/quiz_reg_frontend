import React from 'react';

const LeftPanel = () => {
    return (
        <div className="panel left_panel">
            <div className="content">
                <h3>New here ?</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
                </p>
                <button className="btn transparent" id="sign-up-btn">
                    Sign up
                </button>
            </div>
            
            
            
            <img src="/assets/img/log.svg" className="image" alt="" />
        </div>
    );
};

export default LeftPanel;