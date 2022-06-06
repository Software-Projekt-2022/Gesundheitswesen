import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginLeft: '20px',
  },
  image: {
    marginLeft: '15px',
  },

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end',
    padding: '10px 50px',
    background: 'linear-gradient(45deg, #f7fff7 30%, #102542 90%)',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      background: '#102542',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 0 2px 2px #f7fff7',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginLeft: '15px',
      alignItems: 'center',
      textDecoration: 'none',
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
      },
    },

    
    search: {
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
      }
    },
    searchIconWrapper: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    styledInputBase: {
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
    }
    


  }));

  export default useStyles;