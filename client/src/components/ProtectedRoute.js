import React from 'react'
import {Navigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const location = useLocation();
  if (localStorage.getItem('token')){
    return children;
  }
  else {
    return <Navigate to = '/' />
  }
}

export default ProtectedRoute