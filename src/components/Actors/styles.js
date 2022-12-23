import { makeStyles } from '@mui/styles';

// makeStyles is a hook from the @mui/styles library that allows
// you to define styles as a function and have access to the theme
// provided by the library

export default makeStyles(() => ({
  // define the styles for the image element
  image: {
    maxWidth: '90%', // set the maximum width to 90% of the parent element
    borderRadius: '20px', // round the corners of the image
    objectFit: 'cover', // stretch or shrink the image to fit the dimensions of its container
    boxShadow: '0.5em 0.5em 1em', // add a box shadow to the image
  },
  // define the styles for the btns element
  btns: {
    marginTop: '2rem', // add a top margin of 2rem
    display: 'flex', // make the btns element a flex container
    justifyContent: 'space-around', // distribute the child elements evenly within the container
  },
}));
