import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';



export default function Create() {
    
    const [student, setStudent] = useState({
        studentName: '',
        clicks: null
    });

    const createStudent = () => {
      axios.post('http://localhost:5000/students', student).then( () => {
        window.location.reload(false);
      }).catch((error) => console.log('TEST ERROR: ',error) )
    }


  return (
    <>
      <h2>User Input Field</h2>
      <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
      
        <TextField id="standard-basic" label="Name" variant="standard" value={student.studentName} onChange={(event) => {
          setStudent({ ...student, studentName: event.target.value})}}/>

        <Button variant="outlined" onClick={() => setStudent({ ...student, clicks: student.clicks+1})}>Click Me</Button>
    
        <TextField focused id='clickCounter'  label="Number of Clicks" value={student.clicks}/>
  
        <Button variant="outlined" onClick={createStudent}>Submit</Button>

      </Box>
    </>
  );
}