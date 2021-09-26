import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    // console.log(props)
    const { name, img, education, selary, awards, country } = props.doctor
    return (
        <div className="cart-container">
            <img className='card-img-top ' src={img} alt="" />
            <h4> Name: {name} </h4>
            <h6> Awards: {awards} </h6>
            <p> Education: {education} </p>
            <p>country: {country}</p>
            <p> Selary: $ {selary} </p>
            <button

                onClick={() => props.handleAddToCart(props.doctor)}
                type="button" className="btn btn-primary">
                <i className="fas fa-user-nurse p-1"></i>
                Click Me</button>
        </div>
    );
};

export default Doctor;