import React  from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';

import logo from '../../images/cyber-city-logo.png'
import { AppBar, Typography, CssBaseline, Toolbar, Grid, Button } from "@material-ui/core";
import useStyles from './styles'
import { Stack } from '@mui/material';
import { COOKIE } from '../../constants/actionTypes';


const Header = () => {

    const removeCookie = () => Cookies.remove(COOKIE)

  const classes = useStyles();
        
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <CssBaseline />
            <Toolbar>
                <a href='http://cyber-city.systems/'><img className={classes.image} src={logo} alt="LOGO" height="60" width={60}></img></a>
                <Typography className={classes.heading} variant ="h4" align="center">Gesundheitswesen</Typography>
                <div className={classes.navlinks}>
                    <Stack 
                        item xs={8}
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        
                        <Typography><Link className={classes.link} to="/">Startseite</Link></Typography>
                        <Typography><Link className={classes.link}  to='/categorys'>Kategorien</Link></Typography>
                        <Typography><Link className={classes.link}  to='/experts'>Experten</Link></Typography>
                        
                        <Button
                            className={classes.logoutButton} 
                            onClick={() => removeCookie}
                            variant='contained' color="success">Logout
                        </Button>
                        </Stack>
                </div>
            </Toolbar>
        </AppBar>
    );
}


export default Header;