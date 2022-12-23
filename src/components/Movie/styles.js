import { makeStyles } from '@mui/styles';

// makeStyles is a function from the '@mui/styles' library that allows you to define
// CSS styles in JavaScript. It takes in a function that receives the current theme as
// an argument and returns an object with CSS class names and their corresponding styles.

export default makeStyles((theme) => ({
  // The 'movie' class is applied to a container element that holds a movie.
  movie: {
    padding: '10px',
  },
  // The 'title' class is applied to a text element that displays the movie title.
  title: {
    color: theme.palette.text.primary,
    // The 'ellipsis' value for 'textOverflow' means that the text will be truncated with an
    // ellipsis if it overflows its container.
    textOverflow: 'ellipsis',
    width: '230px',
    overflow: 'hidden',
    // The 'nowrap' value for 'whiteSpace' means that the text will not wrap to the next line.
    whiteSpace: 'nowrap',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
  // The 'links' class is applied to a container element that holds links to more information
  // about the movie.
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    // The [theme.breakpoints.up('xs')] syntax is a way to specify styles that apply to
    // certain screen sizes using the theme's breakpoint values. In this case, the styles
    // inside the curly braces will only apply when the screen size is greater than or equal
    // to the 'xs' breakpoint.
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    // The '&:hover' syntax is a way to specify styles that apply when the element is hovered
    // over. In this case, the cursor will change to a pointer when the element with the
    // 'links' class is hovered over.
    '&:hover': {
      cursor: 'pointer',
    },
  },
  // The 'image' class is applied to an image element that displays the movie poster.
  image: {
    borderRadius: '20px',
    height: '300px',
    marginBottom: '10px',
    // The '&:hover' syntax is a way to specify styles that apply when the element is hovered
    // over. In this case, the image will be scaled up by 5% when hovered over.
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));
