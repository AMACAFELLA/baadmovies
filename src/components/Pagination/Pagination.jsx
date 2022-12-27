// import the React library
import React from 'react';
// import the Pagination component from the @material-ui/material library
import { Pagination } from '@mui/material';

// import the styles object
import useStyles from './styles';

// define the CustomPagination functional component
function CustomPagination({ currentPage, setPage, totalPages }) {
  // destructure the classes object from the useStyles hook
  const classes = useStyles();

  // define the handleChange function to update the current page when the pagination changes
  const handleChange = (event, value) => {
    setPage(value);
  };

  // if the total number of pages is 0, return null to avoid rendering the pagination
  if (totalPages === 0) return null;

  // return the Pagination component wrapped in a div with the container class
  return (
    <div className={classes.container}>
      {/* the Pagination component with the count, page, onChange, color, and class props */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="secondary"
        className={classes.pagination}
      />
    </div>
  );
}

// export the CustomPagination component
export default CustomPagination;
