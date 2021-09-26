import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
import './Team.css';

const Team = () => {
    const [doctors, setDoctors] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("/doctors.JSON")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);

    const handleAddToCart = (doctor) => {
        const newCart = [...cart, doctor];
        setCart(newCart)
    }
    return (
        <div className=" team-container">
            <div className=" doctor-container">

                <div className="cart-style">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.key}
                            doctor={doctor}
                            handleAddToCart={handleAddToCart}
                        >
                        </Doctor>)
                    }
                </div>
            </div>
            <div className=" doctor-detils">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;