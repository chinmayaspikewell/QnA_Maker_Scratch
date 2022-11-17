import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Link} from 'react-router-dom';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Qna_Admin 1.0 
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }





  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundRepeat: 'no-repeat',
    
      backgroundPosition: 'center',
      backgroundColor: '#001529',
      },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


  function SignUp() {
    const classes = useStyles();
  
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="fname"
                autoFocus
              />
               <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                autoFocus
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="cpassword"
                id="cpassword"
                autoComplete="confirm-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link  variant="body2">
                    Already User?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link  to="/login" variant="body2">
                     Have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }


  export default SignUp ;

