import React, { FunctionComponent } from 'react';
  
const Loader: FunctionComponent = () => {
   
    return (
        <div className="preloader-wrapper big active"> 
            <div className="spinner-layer spinner-blue"> 
                <div className="circle-clipper left"> 
                    <div className="circle"></div> 
                </div> { /* /div circle-clipper feft */}
                <div className="gap-patch"> 
                    <div className="circle"></div> 
                </div> { /* /div gap-patch */}
                <div className="circle-clipper right"> 
                    <div className="circle"></div> 
                </div> { /* /div circle-clipper righ */}
            </div> { /* /div spinner-layer spinner-blue */}
        </div> 
    );
}
   
export default Loader;