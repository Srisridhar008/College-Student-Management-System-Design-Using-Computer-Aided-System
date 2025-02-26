import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SemesterDetail({ studentId, closePopup }) {
  const [student, setStudent] = useState(null);
  const [semesterData, setSemesterData] = useState({
    semGPA: Array(8).fill(""),
    semResults: Array(8).fill(""),
  });

  useEffect(() => {
    // Fetch student data by studentId
    axios
      .get(`http://localhost:3000/Students/${studentId}`)
      .then((res) => setStudent(res.data))
      .catch(() => alert("Failed to fetch student details"));
  }, [studentId]);

  // Handle input change for GPA and Result Image URL
  function handleChange(e, index, type) {
    const { value } = e.target;
    setSemesterData((prevData) => ({
      ...prevData,
      [type]: prevData[type].map((item, i) => (i === index ? value : item)),
    }));
  }

  // Handle form submission to save semester details
  function handleSubmit(e) {
    e.preventDefault();

    // Add semester details to the student object
    const updatedStudent = {
      ...student,
      semesterDetails: semesterData, // Save semester data
    };

    // Send PUT request to update student record
    axios
      .put(`http://localhost:3000/Students/${studentId}`, updatedStudent)
      .then(() => {
        alert("Semester Details Saved Successfully!");
        closePopup(); // Close the popup after saving
      })
      .catch(() => alert("Failed to save semester details"));
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Semester Details</h2>
        {student ? (
          <form onSubmit={handleSubmit}>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Register No:</strong> {student.RegNo}</p>

            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <h3>Semester {index + 1}</h3>
                <label>GPA: </label>
                <input
                  type="text"
                  value={semesterData.semGPA[index]}
                  onChange={(e) => handleChange(e, index, "semGPA")}
                  required
                />

                <label>Result Image URL: </label>
                <input
                  type="text"
                  value={semesterData.semResults[index]}
                  onChange={(e) => handleChange(e, index, "semResults")}
                  required
                />
              </div>
            ))}

            <button type="submit">Save Details</button>
            <button type="button" onClick={closePopup}>Close</button>
          </form>
        ) : (
          <p>Loading student data...</p>
        )}
      </div>
    </div>
  );
}
