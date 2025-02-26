import React from 'react';
import'./About.css'
export default function About() {
  return (
    <div className="about-container">
     <center> <h1 className="about-heading">About......?</h1></center>
      <p className="about-description">
        The <strong>Student Management System</strong> is designed to help educators and administrators streamline the management of student records.
      </p>

      <br/><br/><br/>

      <section className="benefits">
        <h2>Key Benefits</h2>
        <ul>
          <li>💡 Easy-to-use interface for all users</li>
          <li>🔒 Secure student data storage and access</li>
          <li>📈 Track academic progress with ease</li>
          <li>🌍 Accessible from anywhere with an internet connection</li>
        </ul>
      </section>
   
      <footer className="about-footer">
        <p>© 2025 Student Management System</p>
      </footer>
    </div>
  );
}
