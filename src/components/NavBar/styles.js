// import the makeStyles function from the @material-ui/styles library
import { makeStyles } from '@mui/styles';

// define a constant for the width of the drawer element
const drawerWidth = 240;

// export the function generated by the makeStyles function
export default makeStyles((theme) => ({
  // the styles for the toolbar element
  toolbar: {
    // the height of the element
    height: '80px',
    // the display property
    display: 'flex',
    // the justify-content property
    justifyContent: 'space-between',
    // the margin-left property
    marginLeft: '240px',
    // the background-color property
    backgroundColor: '#2B1C40',
    // a media query to change the margin-left and flex-wrap properties on screens smaller than 600 pixels
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  // the styles for the menuButton element
  menuButton: {
    // the margin-right property
    marginRight: theme.spacing(2),
    // a media query to hide the element on screens larger than 600 pixels
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
