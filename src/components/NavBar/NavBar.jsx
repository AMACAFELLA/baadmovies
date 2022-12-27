import React, { useState, useEffect, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { Search, Sidebar } from '../index';
import { setUser } from '../../features/auth';
import { fetchToken, createSessionId, moviesApi } from '../../utils/index';
import { ColorModeContext } from '../../utils/ToggleColorMode';

function Navbar() {
  // get the classes for the component from the useStyles hook
  const classes = useStyles();
  // get a boolean value indicating if the screen width is less than 600 pixels
  const isMobile = useMediaQuery('(max-width:600px)');
  // get the current theme from the useTheme hook
  const theme = useTheme();
  // get the dispatch function from the useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();
  // get the isAuthenticated and user values from the user reducer in the Redux store
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // create a state variable called mobileOpen with a default value of false, and a function to update it
  const [mobileOpen, setMobileOpen] = useState(false);

  // get the value of the ColorModeContext
  const colorMode = useContext(ColorModeContext);

  // get the request_token from local storage
  const token = localStorage.getItem('request_token');
  // get the session_id from local storage
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  // perform the logInUser function when the component mounts or the token value changes
  useEffect(() => {
    const logInUser = async () => {
      // if a request_token is present in local storage
      if (token) {
        // if a session_id is also present in local storage
        if (sessionIdFromLocalStorage) {
          // make a request to the /account endpoint using the session_id and get the user data
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          // dispatch an action to set the user in the Redux store
          dispatch(setUser(userData));
        } else {
          // create a new session_id
          const sessionId = await createSessionId();
          // make a request to the /account endpoint using the new session_id and get the user data
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          // dispatch an action to set the user in the Redux store
          dispatch(setUser(userData));
        }
      }
    };

    // call the logInUser function
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar?.avatar_path}`}
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
