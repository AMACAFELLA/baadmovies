import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    borderRadius: '8px',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '50%',
      justifyContent: 'center',
    },
  },
  input: {
    width: '100%',
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
  },
  icon: {
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    fontSize: '1.5rem',
    marginLeft: '8px',
  },
}));
