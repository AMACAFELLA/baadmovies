// import the React library
import React from 'react';
// import the Typography and Box components from the material-ui library
import { Typography, Box } from '@mui/material';

// import the styles object from the styles.js file
import useStyles from './styles';
// import the Movie component from the index.js file
import { Movie } from '../index';

// define the RatedCards component
function RatedCards({ title, movies }) {
  // get the styles object
  const classes = useStyles();

  // render the RatedCards component
  return (
    // the main container
    <Box>
      {/* the title */}
      <Typography variant="h5" gutterBottom>{title}</Typography>
      {/* the movies container */}
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {/* map over the movies and render a Movie component for each one */}
        {movies?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
}

// export the RatedCards component
export default RatedCards;
