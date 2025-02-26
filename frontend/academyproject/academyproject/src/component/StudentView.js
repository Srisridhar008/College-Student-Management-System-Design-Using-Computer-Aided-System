import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentView.css';
import { useNavigate } from 'react-router-dom';
import Edit from './Edit';

export default function StudentView() {
  const [list, setList] = useState([]);  
  const [popup, setPopup] = useState(false);  
  const [viewPopup, setViewPopup] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3003/api/getdet')
      .then((res) => setList(res.data))
      .catch((err) => console.log("API Error:", err));
  }, []);

  function handleView(id) {
    const viewData = list.find((student) => student._id === id);
    setData(viewData);
    setViewPopup(true);
  }

  function handleEdit(student) {
    setPopup(true);
    setData(student);
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:3003/api/deletedet/${id}`)
      .then(() => setList(list.filter(item => item._id !== id)))
      .catch(err => console.log("Delete Error:", err));
  }

  function updateList(updatedStudent) {
    setList((prevList) =>
      prevList.map((student) =>
        student._id === updatedStudent._id ? updatedStudent : student
      )
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>PhoneNo</th>
            <th>Email</th>
            <th>RegNo</th>
            <th>ABCID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x) => (
            <tr key={x._id}>
              <td>{x.RollNo}</td>
              <td>{x.name}</td>
              <td>{x.PhoneNo}</td>
              <td>{x.email}</td>
              <td>{x.RegNo}</td>
              <td>{x.ABCID}</td>
              <td>
                <button className='view-btn' onClick={() => handleView(x._id)}>View</button>
                <button className='edit-btn' onClick={() => handleEdit(x)}>Edit</button>
                <button className='delete-btn' onClick={() => handleDelete(x._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popup && <Edit setPopup={setPopup} data={data} updateList={updateList} />}
      {viewPopup && <ViewPopup data={data} setViewPopup={setViewPopup} />}
    </div>
  );
}

function ViewPopup({ data, setViewPopup }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Student Details</h2>
        <p><strong>RollNo:</strong> {data.RollNo}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>PhoneNo:</strong> {data.PhoneNo}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>RegNo:</strong> {data.RegNo}</p>
        <p><strong>ABCID:</strong> {data.ABCID}</p>
        <button onClick={() => setViewPopup(false)}>Close</button>
      </div>
    </div>
  );
}
