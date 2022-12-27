import React from 'react';
import { Grid } from '@mui/material';

// Import the styles for the MovieList component
import useStyles from './styles';

// Import the Movie component
import { Movie } from '../index';

// MovieList is a functional component that displays a list of movies
function MovieList({ movies, numberOfMovies, excludeFirst }) {
  // Use the styles defined in the 'useStyles' hook
  const classes = useStyles();

  // Determine the starting index for the list of movies based on the 'excludeFirst' prop
  const startFrom = excludeFirst ? 1 : 0;

  // Return a grid container element with a list of Movie components inside
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        // Each Movie component is passed the 'movie' object and an index 'i' as props
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
