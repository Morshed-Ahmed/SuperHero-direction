import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    let total = 0;
    for (const doctor of cart) {
        total = total + doctor.selary
    }
    return (
        <div>
            <h4><i className="fas fa-clinic-medical text-primary"></i> Summary</h4>
            <h6>Parson: {props.cart.length}</h6>
            <br />
            <h5>Total Cost: ${total}</h5>
            <ul>
                {

                    cart.map(doctor => <li>{doctor.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;