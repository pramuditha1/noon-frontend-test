
import React from "react";

//static html message generic component
const HtmlMessage = (props) => {
    return (
        <div style={...props.styles}>
            <h2>{props.message}</h2>
        </div>
    );
};

export default HtmlMessage;
