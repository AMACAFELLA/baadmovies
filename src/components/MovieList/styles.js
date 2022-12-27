import { makeStyles } from '@mui/styles';

// makeStyles is a hook that creates a style object for a component
export default makeStyles((theme) => ({
  // The movieContainer style is applied to a container element that displays a list of movies
  movieContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Movies are evenly spaced between each other
    overflow: 'auto', // If the container overflows, scrollbars will be added
    flexWrap: 'wrap', // Movies will wrap to the next line if there is not enough space
    [theme.breakpoints.down('sm')]: { // At small screen sizes, movies are centered instead of evenly spaced
      justifyContent: 'center',
    },
  },
}));
