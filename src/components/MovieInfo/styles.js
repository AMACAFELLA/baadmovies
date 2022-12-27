import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  // The 'containerSpaceAround' class is applied to a container element and makes it display as a flexbox with 'space-around' justification.
  // It also adds a margin of 10 pixels to the top and bottom of the element.
  // The media query makes the flex direction and wrap properties apply only to small screens.
  containerSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  // The 'poster' class is applied to an image element and gives it a border radius of 20 pixels, a box shadow, and a width of 80%.
  // The media queries adjust the margin and width for different screen sizes.
  poster: {
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '50%',
      // height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
      height: '350px',
      marginBottom: '30px',
    },
  },
  // The 'genresContainer' class is applied to a container element and makes it display as a flexbox with 'space-around' justification and the ability to wrap its children.
  // It also adds a margin of 10 pixels to the top and bottom of the element.
  genresContainer: {
    margin: '10px 0 !important',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  // The 'genreImage' class is applied to an image element and gives it a margin of 10 pixels on the right side.
  // It also applies an invert filter to the image if the theme is set to dark mode.
  genreImage: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: '10px',
  },
  // The 'links' class is applied to a link element and makes it display as a flexbox with 'center' justification and alignment.
  // It also removes the underline from the link and adds padding for small screens.
  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1rem',
    },
  },
  // The 'castImage' class is applied to an image element and gives it a width of 100%, a max width of 7em, a height of 8em, and a 'cover' object fit.
  // It also adds a border radius of 10 pixels.
  castImage: {
    width: '100%',
    maxWidth: '7em',
    height: '8em',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  // The 'buttonsContainer' class is applied to a container element and makes it display as a flexbox with 'space-between' justification.
  // It also sets the width to 100% and changes the flex direction to 'column' for small screens.
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  // The 'modal' class is applied to a container element and makes it display as a flexbox with 'center' alignment and justification.
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // The 'video' class is applied to a video element and gives it a width of 50% and a height of 50%.
  // The media query adjusts the width and height for small screens.
  video: {
    width: '50%',
    height: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '90%',
    },
  },
}));
