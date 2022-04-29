import React from "react";
import {FaArrowCircleUp} from "react-icons/fa";

const Return = () => {
    const Fa = {
        width: '2rem',
        height: '2rem',
        position: 'fixed',
        zIndex : '5',
        right: '1.5rem',
        bottom: '3rem',
        color: 'white',
    }
    return(
        <a href="#hero" style={{textDecoration:'none', textDecorationColor: 'none'}}><FaArrowCircleUp style={Fa} /></a>
    )
}

export default Return;