import React, { useState } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { MovieList, Pagination, FeaturedMovie } from '../index';
import { useGetMoviesQuery } from '../../services/TMDB';

// The Movies component is a functional component that displays a list of movies based on the current genre or category in the redux store, or a search query.
// It also displays a featured movie and a pagination component.
function Movies() {
  // Declare a state variable for the current page number
  const [page, setPage] = useState(1);

  // Select the current genre or category and search query from the redux store using the useSelector hook
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);

  // Use the useGetMoviesQuery hook to fetch a list of movies based on the current genre or category and search query
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  // Use the useMediaQuery hook to determine the current screen size
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));

  // Set the number of movies to display based on the screen size
  const numberOfMovies = lg ? 17 : 19;

  // If the movies are still being fetched, display a loading spinner
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  // If there are no movies that match the search query, display a message
  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please searh for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';

  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
}

export default Movies;
