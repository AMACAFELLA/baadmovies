// import the React library and the useEffect hook
import React, { useEffect } from 'react';
// import the Box, Button, and Typography components from the @material-ui/material library
import { Box, Button, Typography } from '@mui/material';
// import the ExitToApp icon from the @material-ui/icons-material library
import { ExitToApp } from '@mui/icons-material';
// import the useSelector hook from the react-redux library
import { useSelector } from 'react-redux';

// import the useGetListQuery hook from the TMDB service
import { useGetListQuery } from '../../services/TMDB';
// import the RatedCards component
import { RatedCards } from '../index';

// define the Profile functional component
function Profile() {
  // destructures the user object from the state
  const { user } = useSelector((state) => state.user);
  // use the useGetListQuery hook to get the favorite movies
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
  // the listName to fetch
    listName: 'favorite/movies',
    // the accountId to use
    accountId: user.id,
    // the sessionId to use
    sessionId: localStorage.getItem('session_id'),
    // the page number to fetch
    page: 1,
  });
  // use the useGetListQuery hook to get the watchlisted movies
  const { data: watchlistMovies, refetch: refetchWatchlisted } = useGetListQuery({
  // the listName to fetch
    listName: 'watchlist/movies',
    // the accountId to use
    accountId: user.id,
    // the sessionId to use
    sessionId: localStorage.getItem('session_id'),
    // the page number to fetch
    page: 1,
  });

  // use the useEffect hook to refetch the favorite and watchlisted movies
  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  }, []);

  // define the logout function
  const logout = () => {
  // clear the local storage
    localStorage.clear();
    // redirect to the homepage
    window.location.href = '/';
  };

  // render the Profile component
  return (
  // the main container
    <Box>
      {/* the top container */}
      <Box display="flex" justifyContent="space-between">
        {/* the title */}
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        {/* the logout button */}
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {/* the conditional rendering based on the favorite and watchlisted movies */}
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length
        ? <Typography variant="h5">Add favourite or watchlist same movies to see them here!</Typography>
        : (
          <Box>
            <RatedCards title="Favorite Movies" movies={favoriteMovies} />
            <RatedCards title="Watchlist" movies={watchlistMovies} />
          </Box>
        )}
    </Box>
  );
}

export default Profile;
