import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import useStyles from './styles';
import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '../index';

// Actors is a functional component that displays information about an actor, including their movies
function Actors() {
  // useStyles is a hook that returns an object with the styles for this component
  const classes = useStyles();
  // useState hook is used to manage the state for the current page of movies being displayed
  const [page, setPage] = useState(1);
  // useNavigate is a hook that allows the component to navigate through the application's routes
  const navigate = useNavigate();
  // useParams is a hook that returns the parameters in the current route
  const { id } = useParams();
  // useGetActorQuery is a hook that returns data, isFetching, and error for the actor with the specified id
  const { data, isFetching, error } = useGetActorQuery(id);
  // useGetMoviesByActorIdQuery is a hook that returns data for the movies in which the actor with the specified id has appeared
  // the hook takes an object with the id and page as arguments
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  // if the actor data is still being fetched, display a loading spinner
  if (isFetching) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  // if there was an error fetching the actor data, display a button to go back
  if (error) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
          Go Back
        </Button>
      </Box>
    );
  }

  // if the data was successfully fetched, display the actor's information and their movies
  return (
    <>
      {/* display the actor's name, birthday, and biography in a grid layout */}
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          {/* display the actor's profile image */}
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          {/* display the actor's name */}
          <Typography variant="h2" gutterBottom>{data?.data?.name}</Typography>
          {/* display the actor's birthday */}
          <Typography variant="h5" gutterBottom>Born: {new Date(data?.birthday).toDateString()}</Typography>
          <Typography variant="body1" align="justify" paragraph>{data?.biography || 'Sorry, no biography yet...'}</Typography>
          <Box className={classes.btns}>
            <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">Back</Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">Movies</Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </>
  );
}

export default Actors;
