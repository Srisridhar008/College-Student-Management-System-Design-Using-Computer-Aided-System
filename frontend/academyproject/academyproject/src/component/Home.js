
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup');  
    };

    return (
        <div className="home-container">
            <h1 className="heading">📚 Welcome <br/>Students & Staffs</h1>
            <button className="signup-btn" onClick={handleClick}>signup</button>

            <p className="description">
                Empowering educators and administrators with a seamless way to manage student records.<br />
                Stay organized, updated, and in control — all in one place.
            </p>

            <div className="intro-box">
                <p>
                    <i>Our platform helps you <strong>store, update, and access</strong> student data securely and effortlessly.  
                    Whether you're managing enrollments or tracking academic progress, we've got you covered! 🎓</i>
                </p>
            </div>
        <br/><br/><br/>
            <footer className="footer">
                <p>© 2025 Student Management System</p>
            </footer>

        </div>
    );
}
