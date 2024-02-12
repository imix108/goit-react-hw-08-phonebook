import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// ============ ResponsiveAppBar ============
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage';
import SignUp from 'pages/Register';
import SignIn from 'pages/Login';
import Contacts from 'pages/Contacts';
import Profile from 'pages/Profile';
import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoutes';
import { PrivateRoute } from './PrivateRoutes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  // Create a Redux dispatcher
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignIn />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
