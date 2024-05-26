import React from 'react';
import ErrorImg  from "../images/error.svg";
import Modal from './Modal';

const Errors = () => {
    return ( 
        <div>
            <img src={ErrorImg} alt="Pictures"/>
            <a href={Modal}>Go To Main Page</a>
        </div>
    )
}

export default Errors
