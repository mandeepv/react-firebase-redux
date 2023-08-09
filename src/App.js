import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { login, logout } from './userSlice';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import LandingPage from './LandingPage';
import NotFoundPage from './NotFoundPage';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });

    // Cleanup the listener
    return unsubscribe;
  }, [dispatch]);

  return (

    <Router>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
