import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    table: {
        minWidth: 150,
    },
});


export default function ShowStudent() {
    const classes = useStyles();
   
    const [studentsList, setStudentList] = useState([])

    const deleteStudent = (id) => {
      axios.delete(`http://localhost:5000/students/${id}`).then( () => {
        window.location.reload(false);
      })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/students').then( (allStudents) => {
            setStudentList(allStudents.data);
        } )
    }, [])

  return (
      <>
      <h2>Leaderboard</h2>
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center"># of Clicks</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <TableRow key={key} >
              <TableCell align="center" component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="center">{student.clicks}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" onClick={() => deleteStudent(student._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
