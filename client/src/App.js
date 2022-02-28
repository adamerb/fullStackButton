import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import './App.css';
import useStyles from './styles';



function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="relative" color="inherit" >
          <Typography className={classes.heading} variant="h2" align="center"> The Button</Typography>
        </AppBar>
        <Grow in>
          <Container >
            <Grid flexDirection='column'>
              <Grid item xs={12} sm={8} align='center'>
                <AppBar className={classes.appBar} position="relative" color="inherit" >
                  <Create />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={8}>
                <AppBar className={classes.appBar} position="relative" color="inherit">
                  <Student />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;