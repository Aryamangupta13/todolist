import React from "react";
import { ReactDOM } from "react-dom";

const Lis=(props)=>{
    return(
        <div className="lis">
            <br/>
            <button className="lisbut" 
            onClick={()=>{
                return props.onSelect(props.id);
            }}>x</button>
            <li>{props.txt}</li>    
            <br/>
        </div>
    );
}
export  default Lis;