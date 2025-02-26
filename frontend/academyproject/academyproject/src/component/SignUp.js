         
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './SignUp.css';

// export default function Signup() {
//     const navigate = useNavigate();
//     const [message, setMessage] = useState('');
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         dept: '',
//         role: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);

//         axios.post('http://localhost:3003/users/signup', formData)
//             .then(alert('Signup Successful'),
//         navigate('/login'))
//             .catch(err => {
//                 console.error(err);
//             });
//     };

//     return (
//         <div className="formcount">
//             <br />
//             <form onSubmit={handleSubmit}>
//                 <label>Username :</label>
//                 <input  type="text"   name="name"onChange={handleChange}  value={formData.name}  required placeholder='Enter the username'/><br/><br/>
//                  <label className='email'>Email :</label>
//                 <input type="email"  name="email" onChange={handleChange}   value={formData.email} required placeholder='Enter the email'/><br/><br/>

//                 <label>Password :</label>
//                 <input  type="password"  name="password" value={formData.password} onChange={handleChange} required  placeholder='Enter the password'/><br/><br/>


//                 <label>Department :</label>
//                  <select name="dept" value={formData.dept} onChange={handleChange} required>
//                  <option value="">Select Department</option>
//      <option value="CSE">Computer Science (CSE)</option>
//      <option value="ECE">Electronics & Communication (ECE)</option>
//      <option value="EEE">Electrical Engineering (EEE)</option>
//      <option value="MECH">Mechanical Engineering</option>
//      <option value="CIVIL">Civil Engineering</option>
//  </select><br/><br/>



//  <label className='role'>Role :</label>
//                 <select   name="role"  value={formData.role}   onChange={handleChange}   required >
//                     <option value="">Select role</option>
//                      <option value="advisor">Advisor</option> 
//                      <option value="hod">HOD</option>
//                 </select><br/><br/>



//                      <button className='signup-button' type='Submit'>Signup</button>
//                 </form>

//             <div>{message}</div> 

//             <br /><br /><br /><br /><br /><br /><br />
//         </div>
//     );
// }
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

export default function Signup() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dept: '',
        role: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3003/users/signup', formData)
            .then(res => { 
                alert('Signup Successful'); 
                navigate('/login'); 
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="formcount">
            <br />
            <form onSubmit={handleSubmit}>
                <label>Username :</label>
                <input type="text" name="name" onChange={handleChange} value={formData.name} required placeholder='Enter the username' /><br /><br />
                
                <label className='email'>Email :</label>
                <input type="email" name="email" onChange={handleChange} value={formData.email} required placeholder='Enter the email' /><br /><br />

                <label>Password :</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder='Enter the password' /><br /><br />

                <label>Department :</label>
                <select name="dept" value={formData.dept} onChange={handleChange} required>
                    <option value="">Select Department</option>
                    <option value="CSE">Computer Science (CSE)</option>
                    <option value="ECE">Electronics & Communication (ECE)</option>
                    <option value="EEE">Electrical Engineering (EEE)</option>
                    <option value="MECH">Mechanical Engineering</option>
                    <option value="CIVIL">Civil Engineering</option>
                </select><br /><br />

                <label className='role'>Role :</label>
                <select name="role" value={formData.role} onChange={handleChange} required >
                    <option value="">Select role</option>
                    <option value="advisor">Advisor</option>
                    <option value="hod">HOD</option>
                </select><br /><br />

                <button className='signup-button' type='Submit'>Signup</button>
            </form>

            <div>{message}</div>
        </div>
    );
}
