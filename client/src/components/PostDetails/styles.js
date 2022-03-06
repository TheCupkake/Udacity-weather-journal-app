import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
    
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column-reverse',
    },
  },
  section: {
    borderRadius: '20px',
    width: '50%',
    margin: '10px',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    },
  },
  imageSection: {
     width: '50%',
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
     [theme.breakpoints.down('sm')]: {
       marginLeft: 0,
       width: '100%',
       justifyContent: 'center'
     },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
      fontWeight: 500
    }
  },
  '@global': {

    'p > img': {
      width: '95%'
    }
  }
  
}));