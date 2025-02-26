import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './StaffDetails.css';

export default function StaffDetails() {
    const [data, setData] = useState({
        name: '',
        dept: '',
        email: '',
        role: '',
    });

    const { pid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3003/users/signup/${pid}`)
            .then(res => setData(res.data))  
            .catch(err => console.log(err));
    }, [pid]);

    const handleClick = () => {
        navigate('/student-details');  
    };

    const handlePost = () => {
        axios.post('http://localhost:3003/users/signup', data)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div className='flex'>
            <div className='profile'>
                <h1>Name : {data.name}</h1>
                <br />
                <h2>Department : {data.dept}</h2>
                <br />
                <h2>Email Id : {data.email}</h2>
                <br />
                <h2>Role : {data.role}</h2>
                <br />
                <button className='pro-btn' onClick={handleClick}>Student Details</button>
                <button onClick={() => navigate('/student-view')}>View Details</button>
            </div>
        </div>
    );
}
