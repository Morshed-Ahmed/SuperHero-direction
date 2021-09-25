import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    // console.log(props.doctor)
    const { name, img, education, selary, birthday, } = props.doctor
    return (
        <div className="hu">
            <img className='img-fluid' src={img} alt="" />
            <h3> {name} </h3>
            <h3> {birthday} </h3>
            <h3> {education} </h3>
            <h3> {selary} </h3>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    );
};

export default Doctor;