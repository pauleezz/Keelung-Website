import React, { Component } from 'react';
import "../CSS/Home.css"

class KeelungServiceIcon extends Component{
    render(){
        const {icon_img, text} = this.props;

        return(
            <button className="icon_but">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <img src={`/pictures/${icon_img}`} 
                        style={{width: "40%"}}/> 
                    <div className="" style={{ fontWeight: "bold" }}>
                        {text}
                    </div>
                </div>

            </button>

            
            
        )
    }
}
export default KeelungServiceIcon;