import React from 'react';
import { Pagination } from '@mui/material';

import useStyles from './styles';

function CustomPagination({ currentPage, setPage, totalPages }) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
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

export default CustomPagination;
