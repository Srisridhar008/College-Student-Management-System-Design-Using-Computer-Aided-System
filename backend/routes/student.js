const express = require('express');
const router = express.Router();
const Student = require('../models/Studentdetail');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/Students', async (req, res) => {
  try {
    const { RollNo, name, PhoneNo, email, RegNo, ABCID } = req.body;
    const student = new Student({
      RollNo,
      name,
      PhoneNo,
      email,
      RegNo,
      ABCID,
    });

     student.save();  
    res.status(200).json({ message: "Student details saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving student details", error: err });
  }
});

router.get('/getdet',async(req,res)=>{
  Student.find()

  .then(resp=>res.send(resp))
})

router.put('/updatedet/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  Student.findByIdAndUpdate(id, updates, { new: true })
    .then(updatedStudent => {
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
    })
    .catch(err => res.status(500).json({ message: 'Error updating student', error: err.message }));
});


router.delete('/deletedet/:id', async (req, res) => {
  const { id } = req.params;
  
  const deletedStudent = await Student.findByIdAndDelete(id);
  
  if (!deletedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }
  
  res.status(200).json({ message: "Student deleted successfully" });
});





module.exports = router;
