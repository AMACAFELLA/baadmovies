import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';

// configureStore is a function that creates a new Redux store.
// It takes an object as an argument with the following options:
// - reducer: a reducer function that takes the current state and an action, and returns the next state.
//            In this case, we are passing an object with several reducers as the value for 'reducer'.
//            Each reducer will handle a specific slice of the application state.
export default configureStore({
  reducer: {
    // The tmdbApi reducer is responsible for managing the state related to the TMDB API.
    // It is imported from the '../services/TMDB' module, which exports an object with a 'reducer' and 'reducerPath' property.
    // The 'reducer' property is the actual reducer function, and the 'reducerPath' property is a string that specifies the path in the state object where the reducer's state will be stored.
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    // The 'currentGenreOrCategory' reducer is responsible for managing the state related to the currently selected genre or category.
    // It is imported from the '../features/currentGenreOrCategory' module, which exports the reducer function.
    currentGenreOrCategory: genreOrCategoryReducer,
    // The 'user' reducer is responsible for managing the state related to the authenticated user.
    // It is imported from the '../features/auth' module, which exports the reducer function.
    user: userReducer,
  },
});
