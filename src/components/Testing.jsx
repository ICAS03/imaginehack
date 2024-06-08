import React from 'react'
import { useLocation } from 'react-router';

const Testing = () => {
    const location = useLocation();
    const { user } = location.state;

  return (
    <div>{user.name}</div>
  )
}

export default Testing