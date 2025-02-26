import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StaffPages.css';

export default function StaffPages() {
    const [lists, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3003/users/signup')
            .then(res => setList(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (_id) => {
        axios.delete(`http://localhost:3003/users/signup/${_id}`)
            .then(() => {
                setList(lists.filter(item => item._id !== _id));
            })
            .catch(err => console.log('Error deleting the staff member:', err));
    };

    return (
        <div className='cards'>
            {lists.map(x => (
                <div className='grid-items' key={x._id}>
                    <h1>{x.name}</h1>
                    <h2>{x.dept}</h2>
                    <h3>{x.email}</h3>
                    <h4>{x.role}</h4>
                    {/* {x.img && <img src={x.img} width={500} height={500} alt={`${x.name}'s profile`} />} */}
                    <div className="actions">
                        <button onClick={() => navigate(`/signup/${x._id}`)}>View Details</button>
                        <button onClick={() => handleDelete(x._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
