import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',
    borderRadius: '15'
  },

  card: {
    borderRadius: '35px',

  },
  paper:{
    margin: '20px', 
    padding: '20px', 
    borderRadius: '15px',
    justifyContent: 'center',
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    width: '50%',
    
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  headline: {
    display: 'flex',
    justifyContent: 'center',

  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
}));