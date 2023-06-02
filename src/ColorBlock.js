import React from "react";

export default function ColorBlock(props){
    return(
        <div className="ColorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}