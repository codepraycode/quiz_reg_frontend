import React from 'react';

const RightPanel = ({signOut}) => {
    return (
        <>
            <div className="panels_container">
                <div className="panel right_panel">
                    <div className="content">
                        <h3>Another Header here</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
                        </p>

                    <button className="btn transparent" onClick={()=>{signOut()}}>
                            Sign Out
                        </button>
                    </div>

                    <img src="/assets/img/rccg.png" className="image" alt="" />


                    {/* <div className="image_container">
                        <img src="/assets/img/rccg.png" className="image" alt="" />
                    </div> */}
                
                    
                </div>
            </div>

            {/* <div className="footer">
                <div className="content">
                    <h3>Another Header here</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
                    </p>

                <button className="btn transparent" onClick={()=>{signOut()}}>
                        Sign Out
                    </button>
                </div>

                <img src="/assets/img/rccg.png" className="image" alt="" />
            </div> */}
        </>
        
    );
};

export default RightPanel;