import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    width : "100px",
    height: "100px",
    paddingLeft: '200px',
    paddingTop: '200px', // 16:9,
    marginTop:'30',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },

  card: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '15px',
  
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
});