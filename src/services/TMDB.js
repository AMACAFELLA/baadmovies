import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({

    // Get Genres
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get Movies by Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get Movies By Category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          if (genreIdOrCategoryName === 'top_rated') {
            return `movie/${genreIdOrCategoryName}?page=${page}&vote_average.lte=5&vote_average.gte=1&certification_country=US&certification.lte=PG-13&certification.gte=G&region=US&api_key=${tmdbApiKey}`;
          }
          return `movie/${genreIdOrCategoryName}?page=${page}&vote_average.lte=5&vote_average.gte=1&certification_country=US&certification.lte=PG-13&certification.gte=G&region=US&api_key=${tmdbApiKey}`;
        }

        //* Get Movies by Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&vote_average.lte=5&vote_average.gte=1&certification_country=US&certification.lte=PG-13&certification.gte=G&region=US&without_keywords=sex&api_key=${tmdbApiKey}`;
        }
        //* Popular Movies with Vote Average <= 5 in the United States of America
        return `movie/popular?page${page}&vote_average.lte=5&vote_average.gte=1&certification_country=US&certification.lte=PG-13&certification.gte=G&include_adult=false&region=US&api_key=${tmdbApiKey}`;
      },
    }),

    // Get Movie
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    // Get Recommendations
    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}&vote_average.gte=1&vote_average.lte=5`,
    }),

    // Get Actor
    getActor: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by Actor
    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&vote_average.lte=5&vote_average.gte=1&page=${page}&api_key=${tmdbApiKey}`,
    }),

    // Get User Specific Lists
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
