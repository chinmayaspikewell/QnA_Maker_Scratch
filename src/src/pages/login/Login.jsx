import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
//import Link from '@material-ui/core/Link';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import { BrowserRouter as Link } from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Parking 1.0
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// const useForm = () => {
//   const classes = useStyles();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
// }
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  //url(https://source.unsplash.com/random)
  //backgroundColor:theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
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

export default function Login() {
  const classes = useStyles();
  //const { register, handleSubmit, control, errors } = useForm();
  const [count, onSuccess] = useState(false);

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
            Sign in
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              /*className={classes.inputField}
              inputRef={register({
                required: "Email is required.",
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}*/
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>                   
                ),
                endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon />
                    </InputAdornment>
                )
              }}
             /* className={classes.inputField}
              inputRef={register({
                required: "Password is required.",
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}*/
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link  >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              on={1}
              onClick={this.props.true}
            >
              Sign In
            </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Link  variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link to="/signUp" variant="body2">
                  Don't have an account? Sign Up
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