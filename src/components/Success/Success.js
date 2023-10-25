import React, { useEffect, useState } from 'react';

const Success = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Retrieve user data from local storage
    const userEmailFromStorage = localStorage.getItem('userEmail');
    if (userEmailFromStorage) {
      setUserEmail(userEmailFromStorage);
    }
  }, []); 
};

export default Success;
