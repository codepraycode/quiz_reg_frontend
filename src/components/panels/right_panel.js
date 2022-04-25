import React from 'react';

const RightPanel = () => {
    return (
        <div className="panel right_panel">
            <div className="content">
                <h3>One of us ?</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
                </p>
                <button className="btn transparent" id="sign-up-btn">
                    Sign up
                </button>
            </div>
            
            
            
            <img src="/assets/img/register.svg" className="image" alt="" />
        </div>
    );
};

export default RightPanel;