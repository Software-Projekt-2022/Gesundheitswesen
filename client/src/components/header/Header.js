import React from 'react'
import { Link, NavLink } from 'react-router-dom'


import logo from '../../images/cyber-city-logo.png'
import { AppBar, Typography, CssBaseline, Toolbar, Grid } from "@material-ui/core";
import useStyles from './styles'


import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Header = () => {

    const classes = useStyles();
        
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <CssBaseline />
            <Toolbar>
                <a href='/'><img className={classes.image} src={logo} alt="LOGO" height="60" width={60}></img></a>
                <Typography className={classes.heading} variant ="h2" align="center">Gesundheitswesen</Typography>
                <div className={classes.navlinks}>
                    <Grid 
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Search><SearchIconWrapper> <SearchIcon /> </SearchIconWrapper> <StyledInputBase placeholder="Search…"inputProps={{ 'aria-label': 'search' }}/></Search>
                        <Typography><Link className={classes.link} to="/">Startseite</Link></Typography>
                        <Typography><Link className={classes.link}  to='/categorys'>Kategorien</Link></Typography>
                        <Typography><Link className={classes.link}  to='/emergency-contacts'>Notfallkontakte</Link></Typography>
                        <Typography><Link className={classes.link}  to='/new/category'>Neue Kategorien</Link></Typography>
                    </Grid>
                </div>
            </Toolbar>
        </AppBar>
    );
}


export default Header;