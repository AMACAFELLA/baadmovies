import React, { useState } from 'react';
// import the TextField and InputAdornment components from the material-ui library
import { TextField, InputAdornment } from '@mui/material';
// import the Search icon from the material-ui icons library
import { Search as SearchIcon } from '@mui/icons-material';
// import the useDispatch hook from the react-redux library
import { useDispatch } from 'react-redux';

// import the styles object
import useStyles from './styles';
// import the searchMovie action creator
import { searchMovie } from '../../features/currentGenreOrCategory';

function Search() {
  // get the styles object
  const classes = useStyles();
  // initialize state for the query string
  const [query, setQuery] = useState('');
  // get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  // define the handleKeyPress function
  const handleKeyPress = (e) => {
    // if the key pressed is the Enter key
    if (e.key === 'Enter') {
      // dispatch the searchMovie action with the current query string
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Search;
