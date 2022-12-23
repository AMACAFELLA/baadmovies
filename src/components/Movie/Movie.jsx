import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
// import the Typography, Grid, Grow, Tooltip, and Rating components from the @mui/material library
import { Link } from 'react-router-dom';
// import the Link component from the react-router-dom library

import useStyles from './styles';
// import the styles defined in the styles.js file

function Movie({ movie, i }) {
  // define the Movie component, which takes in a "movie" prop object and an "i" prop number
  const classes = useStyles();
  // use the styles defined in the styles.js file

  return (
    // render a Grid item with the styles defined in the styles.js file
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      {/* render a Grow component with the specified timeout */}
      <Grow in key={i} timeout={(i + 1) * 250}>
        {/* wrap the JSX in a Link component that links to the movie page when clicked */}
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          {/* render an image with the movie's poster image or a placeholder image */}
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://i.postimg.cc/ryjbdnb4/Untitled-500-750-px.png'}
            alt={movie.title}
            className={classes.image}
          />
          {/* render the movie's title in a Typography component */}
          <Typography className={classes.title} variant="h5">{movie.title}</Typography>
          {/* render a Tooltip component with the movie's vote average as the title */}
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            {/* render a Rating component with the movie's vote average */}
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
