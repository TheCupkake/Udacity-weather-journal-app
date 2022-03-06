import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      //flexDirection: 'column',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
  },
  image: {
    marginTop: '5px',
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      
      margin: '20 -30 20 10',
     
      justifyContent: 'space-between',
      fontSize: '1em'
    },
  },
  logout: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.7em',
      height: '40px'
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}));