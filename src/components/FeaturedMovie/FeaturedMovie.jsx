import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import the Box, Typography, Card, CardContent, and CardMedia components from the @mui/material library
import { Link } from 'react-router-dom';
// import the Link component from the react-router-dom library

import useStyles from './styles';
// import the styles defined in the styles.js file

function FeaturedMovie({ movie }) {
  // define the FeaturedMovie component, which takes in a "movie" prop object
  const classes = useStyles();
  // use the styles defined in the styles.js file

  if (!movie) return null;
  // if the movie prop is not provided, return null

  return (
    // wrap the JSX in a Link component that links to the movie page when clicked
    <Box component={Link} to={`/movie/${movie.id}`} className={classes.featuredCardContainer}>
      {/* render a Card component with the styles defined in the styles.js file */}
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        {/* render a CardMedia component with the movie's backdrop image and title */}
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />
        {/* wrap the CardContent in a Box component with a padding of 20px */}
        <Box padding="20px">
          {/* render the movie's title and overview in the CardContent component */}
          <CardContent className={classes.cardContent} classes={{ root: classes.cardContentRoot }}>
            <Typography variant="h5" gutterBottom>{movie.title}</Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default FeaturedMovie;
