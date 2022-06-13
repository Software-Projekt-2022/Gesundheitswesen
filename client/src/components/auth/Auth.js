import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signin, singup } from '../../actions/auth.js'

import useStyles from './styles';
import Input from './Input';

const initialState = { email: '', password: '', confirmPassword: '' }

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => setIsSignup((isSignup) => !isSignup)

    const handleSubmit = (e) => {
        e.preventDefaul();
    }

    const handleChange = (e) => {
        setFormData( {...formData, [e.target.name]: e.target.value} )
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Registrieren' : 'Einloggen'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                            <Input name="email" label="Email Adresse" handleChange={handleChange} type="email" />
                            <Input name="passwort" label="Passwort" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            { isSignup && <Input name="confirmPassword" label="Password wiederholen" handleChange={handleChange} type="password" /> }
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                { isSignup ? 'Registrieren' : 'Anmelden' }
                            </Button>
                            <Grid container justify='flex-end'>
                                <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Schon einen Account, log dich ein!': "Keinen Account? Registier dich!"}
                                </Button>
                                </Grid>
                            </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )

}

export default Auth;