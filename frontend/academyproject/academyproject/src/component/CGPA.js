import React, { useState } from 'react';
import './CGPA.css'
function CGPA() {
  const [semesters, setSemesters] = useState([
    { semesterName: 'Semester 1', subjects: [{ name: '', credits: '', grade: '' }] },
  ]);
  const [cgpa, setCgpa] = useState(null);

  // Add a new semester
  const addSemester = () => {
    setSemesters([
      ...semesters,
      { semesterName: `Semester ${semesters.length + 1}`, subjects: [{ name: '', credits: '', grade: '' }] },
    ]);
  };

  // Add a new subject in a particular semester
  const addSubject = (semesterIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].subjects.push({ name: '', credits: '', grade: '' });
    setSemesters(updatedSemesters);
  };

  // Handle input change for a subject
  const handleInputChange = (semesterIndex, subjectIndex, event) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].subjects[subjectIndex][event.target.name] = event.target.value;
    setSemesters(updatedSemesters);
  };

  // Calculate CGPA considering all semesters
  const calculateCGPA = () => {
    let totalCredits = 0;
    let weightedGrades = 0;

    semesters.forEach((semester) => {
      semester.subjects.forEach((subject) => {
        const { credits, grade } = subject;

        if (credits && grade) {
          const gradePoint = getGradePoint(grade);
          totalCredits += parseFloat(credits);
          weightedGrades += gradePoint * parseFloat(credits);
        }
      });
    });

    const cgpaValue = totalCredits > 0 ? weightedGrades / totalCredits : 0;
    setCgpa(cgpaValue.toFixed(2));
  };

  // Convert grade to grade points
  const getGradePoint = (grade) => {
    switch (grade.toUpperCase()) {
        case 'O':
            return 10.0;
      case 'A+':
        return 9.0;
      case 'A':
        return 8.0;
      case 'B+':
        return 7.0;
      case 'B':
        return 6.0;
      case 'C':
        return 5.0;
      
      default:
        return 0.0;
    }
  };

  return (
    <div className="Cgpa">
      <center><h1>College CGPA Calculator</h1></center>
      <form>
        {semesters.map((semester, semesterIndex) => (
          <div key={semesterIndex} className="semester-section">
            <h2>{semester.semesterName}</h2>
            {semester.subjects.map((subject, subjectIndex) => (
              <div key={subjectIndex} className="subject-row">
                <input type="text" name="name" value={subject.name} onChange={(e) => handleInputChange(semesterIndex, subjectIndex, e)}
                 placeholder="Subject Name"/>
                <input  type="number" name="credits" value={subject.credits}  onChange={(e) => handleInputChange(semesterIndex, subjectIndex, e)}
                  placeholder="Credits"/><br/><br/>
                <input  type="text"  name="grade" value={subject.grade} onChange={(e) => handleInputChange(semesterIndex, subjectIndex, e)}
                  placeholder="Grade (A, B+, C, etc.)" />
              </div>
            ))}<br/>
            <button type="button" onClick={() => addSubject(semesterIndex)}>
              Add Another Subject
            </button>
          </div> 
        ))}
      </form>
      <center>
      <button onClick={addSemester}>Add Another Semester</button>
      <br /><br/><br/>
      <button onClick={calculateCGPA}>Calculate CGPA</button>
      {cgpa && <h3>Your CGPA is: {cgpa}</h3>}</center>
    </div>
  );
}

export default CGPA;