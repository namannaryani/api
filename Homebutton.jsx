import React from "react";
import Box from "./Box";


function Homebutton() {


    


    return (
        <div style={{margin: "10px 100px 0px 100px"}}>
            <button type="button" class="btn btn-default" style={{fontWeight: "900"}}>
                <span class="glyphicon glyphicon-chevron-left" ></span>Home</button>
            <Box />
        </div>
    );
}


export default Homebutton;