import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({

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
    logoutButton : {
      margin: "20px", 
      backgroundColor: "#F87060"
    }
  }));

  export default useStyles;