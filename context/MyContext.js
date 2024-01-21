"use client"
import apiURL from '@/api';
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

const APIContext = createContext();

const APIProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPost =  async () =>{
      const response = await axios.get(apiURL);
      // console.log(response.data.data)
      // setData(response.data.data);
      setData(response.data);
    }
    fetchPost();
  }, []);
  return (
    <APIContext.Provider value={{data}}>
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIProvider };
