import React, { useState, useEffect } from 'react'
import { Link, useHistory ,useLocation } from 'react-router-dom'


import logo from '../../images/cyber-city-logo.png'
import { AppBar, Typography, CssBaseline, Toolbar, Grid } from "@material-ui/core";
import useStyles from './styles'
import * as actionType from '../../constants/actionTypes';

import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useDispatch } from 'react-redux';



const Header = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const Search = styled('div')();
    const SearchIconWrapper = styled('div')();

    const logout = () => {
        dispatch( {type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
    })


    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        paddingLeft: `calc(1em + ${theme.spacing(4)})`, 
    }));
  
  const classes = useStyles();
        
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <CssBaseline />
            <Toolbar>
                <a href='http://cyber-city.systems/'><img className={classes.image} src={logo} alt="LOGO" height="60" width={60}></img></a>
                <Typography className={classes.heading} variant ="h4" align="center">Gesundheitswesen</Typography>
                <div className={classes.navlinks}>
                    <Grid 
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Search className={classes.search}>
                          <SearchIconWrapper className={classes.searchIconWrapper}> <SearchIcon /> </SearchIconWrapper> 
                          <StyledInputBase className={classes.tyledInputBase} placeholder="Search…"inputProps={{ 'aria-label': 'search' }}/>
                        </Search>
                        
                        <Typography><Link className={classes.link} to="/">Startseite</Link></Typography>
                        <Typography><Link className={classes.link}  to='/categorys'>Kategorien</Link></Typography>
                        <Typography><Link className={classes.link}  to='/emergency-contacts'>Notfallkontakte</Link></Typography>
                        <Typography><Link className={classes.link} to='/auth'>Login</Link></Typography>
                    </Grid>
                </div>
            </Toolbar>
        </AppBar>
    );
}


export default Header;