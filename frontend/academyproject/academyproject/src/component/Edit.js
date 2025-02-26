import axios from 'axios';
import React, { useState } from 'react';

export default function Edit({ data, setPopup, updateList }) {
    const [proddata, setProddata] = useState({
        RollNo: data?.RollNo || '',
        name: data?.name || '',
        PhoneNo: data?.PhoneNo || '',
        email: data?.email || '',
        RegNo: data?.RegNo || '',
        ABCID: data?.ABCID || ''
    });

    function handleChange(e) {
        setProddata({ ...proddata, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        axios.put(`http://localhost:3003/api/updatedet/${data._id}`, proddata)
            .then((res) => {
                updateList(res.data);  // Update the list with new data
                alert('Updated Successfully');
                setPopup(false);
            })
            .catch(err => console.log("Update Error:", err));
    }

    return (
        <div className="popup">
            <div className="popup-content">
                <h2>Edit Student Details</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label><strong>RollNo:</strong></label>
                        <input type="text" name="RollNo" value={proddata.RollNo} onChange={handleChange} />
                    </div>

                    <div>
                        <label><strong>Name:</strong></label>
                        <input type="text" name="name" value={proddata.name} onChange={handleChange} />
                    </div>

                    <div>
                        <label><strong>PhoneNo:</strong></label>
                        <input type="text" name="PhoneNo" value={proddata.PhoneNo} onChange={handleChange} />
                    </div>

                    <div>
                        <label><strong>Email:</strong></label>
                        <input type="email" name="email" value={proddata.email} onChange={handleChange} />
                    </div>

                    <div>
                        <label><strong>RegNo:</strong></label>
                        <input type="text" name="RegNo" value={proddata.RegNo} onChange={handleChange} />
                    </div>

                    <div>
                        <label><strong>ABCID:</strong></label>
                        <input type="text" name="ABCID" value={proddata.ABCID} onChange={handleChange} />
                    </div>

                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setPopup(false)}>Close</button>
                </form>
            </div>
        </div>
    );
}
