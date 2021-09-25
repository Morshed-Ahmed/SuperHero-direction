import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Team.css'

const Team = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("/doctors.JSON")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);
    return (
        <div className=" team-container">
            <div className=" doctor-container">

                <div className="cart-style">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.key}
                            doctor={doctor}
                        >
                        </Doctor>)
                    }
                </div>
            </div>
            <div className=" doctor-detils">
                <h3>doctors lista:</h3>
            </div>
        </div>
    );
};

export default Team;