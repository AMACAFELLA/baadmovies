import { makeStyles } from '@mui/styles';

// makeStyles is a hook from the @mui/styles library that allows
// you to define styles as a function and have access to the theme
// provided by the library

export default makeStyles((theme) => ({
  // define the styles for the featuredCardContainer element
  featuredCardContainer: {
    marginBottom: '20px', // add a bottom margin of 20px
    display: 'flex', // make the element a flex container
    justifyContent: 'center', // center the child element horizontally within the container
    height: '490px', // set the height to 490px
    textDecoration: 'none', // remove the underline from the Link element
    position: 'relative', // set the position to relative
  },
  // define the styles for the card element
  card: {
    width: '100%', // set the width to 100%
    display: 'flex', // make the element a flex container
    justifyContent: 'flex-end', // align the child element to the right of the container
    flexDirection: 'column', // set the flex direction to column
  },
  // define the styles for the root class of the card element
  cardRoot: {
    position: 'relative', // set the position to relative
  },
  // define the styles for the cardMedia element
  cardMedia: {
    position: 'absolute', // set the position to absolute
    top: 0, // set the top position to 0
    right: 0, // set the right position to 0
    height: '100%', // set the height to 100%
    width: '100%', // set the width to 100%
    backgroundColor: 'rgba(0,0,0,0.575)', // set the background color to a semi-transparent black
    backgroundBlendMode: 'darken', // blend the background color with the image using the "darken" mode
  },
  // define the styles for the cardContent element
  cardContent: {
    color: '#fff', // set the text color to white
    width: '40%', // set the width to 40%
    // if the screen width is below the sm breakpoint, set the width to 100%
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  // define the styles for the root class of the cardContent element
  cardContentRoot: {
    position: 'relative', // set the position to relative
    backgroundColor: 'transparent', // set the background color to transparent
  },
  // define the styles for the trailer element
  trailer: {
    position: 'absolute', // set the position to absolute
    top: 0, // set the top position to 0
    right: 0, // set the right position to 0
    bottom: 0, // set the bottom position to 0
    left: 0, // set the left position to 0
    width: '100%', // set the width to 100%
    height: '100%', // set the height to 100%
  },
}));
