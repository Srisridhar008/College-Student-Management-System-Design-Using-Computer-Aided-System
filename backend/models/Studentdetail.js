const mongoose = require('mongoose');

// Define Student Schema
const studentSchema = new mongoose.Schema({
  RollNo:  String, 
  name: String,
  PhoneNo:  String,
  email: String,  
  RegNo: Number, 
  ABCID: Number, 
}, { timestamps: true });

// Create and export Student Model
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
